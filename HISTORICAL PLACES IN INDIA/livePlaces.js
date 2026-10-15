
(() => {
  const API_URL = "https://en.wikipedia.org/w/api.php";

  const form = document.getElementById("liveSearchForm");
  const input = document.getElementById("liveSearchInput");
  const stateSelect = document.getElementById("liveStateFilter");
  const grid = document.getElementById("livePlacesGrid");
  const status = document.getElementById("liveStatus");

  if (!form || !input || !stateSelect || !grid || !status) {
    console.error("Live search: Check the element IDs in index.html.");
    return;
  }

  let activeController = null;

  async function searchHistoricalPlaces(event) {
    if (event) event.preventDefault();

    const term = input.value.trim();
    const state = stateSelect.value;

    if (!term) {
      status.textContent = "Please enter a monument or historical place name.";
      input.focus();
      return;
    }

    // Cancel an older request if the user starts another search.
    if (activeController) activeController.abort();
    activeController = new AbortController();

    const searchButton = form.querySelector('button[type="submit"]');
    if (searchButton) {
      searchButton.disabled = true;
      searchButton.textContent = "Searching...";
    }

    grid.replaceChildren();
    status.textContent = "Searching Wikipedia for historical information...";

    try {
      const params = new URLSearchParams({
        action: "query",
        list: "search",
        srsearch: `${term} ${state} India`,
        srnamespace: "0",
        srlimit: "15",
        format: "json",
        origin: "*"
      });

      const response = await fetch(`${API_URL}?${params}`, {
        signal: activeController.signal
      });

      if (!response.ok) {
        throw new Error("Online search request failed.");
      }

      const data = await response.json();
      const results = data.query?.search || [];

      if (!results.length) {
        status.textContent =
          "No results found. Try another name, such as Hampi or Charminar.";
        return;
      }

      // Retrieve summaries and thumbnails for the search results.
      const detailsParams = new URLSearchParams({
        action: "query",
        prop: "extracts|pageimages|info",
        titles: results.map(item => item.title).join("|"),
        exintro: "1",
        explaintext: "1",
        exsentences: "3",
        piprop: "thumbnail",
        pithumbsize: "480",
        inprop: "url",
        redirects: "1",
        format: "json",
        origin: "*"
      });

      const detailsResponse = await fetch(
        `${API_URL}?${detailsParams}`,
        { signal: activeController.signal }
      );

      if (!detailsResponse.ok) {
        throw new Error("Could not retrieve place descriptions.");
      }

      const detailsData = await detailsResponse.json();
      const pages = Object.values(detailsData.query?.pages || {});
      const pageMap = new Map(pages.map(page => [page.title, page]));

      const fragment = document.createDocumentFragment();
      let count = 0;

      results.forEach(result => {
        const place = pageMap.get(result.title);
        if (!place) return;

        const card = document.createElement("article");
        card.className = "live-place-card";

        if (place.thumbnail?.source) {
          const img = document.createElement("img");
          img.src = place.thumbnail.source;
          img.alt = place.title;
          img.loading = "lazy";

          img.addEventListener("error", () => img.remove());
          card.appendChild(img);
        }

        const content = document.createElement("div");
        content.className = "live-place-content";

        const heading = document.createElement("h3");
        heading.textContent = place.title;

        const description = document.createElement("p");
        description.textContent =
          place.extract || "No summary is currently available.";

        const link = document.createElement("a");
        link.href =
          place.fullurl ||
          `https://en.wikipedia.org/wiki/${encodeURIComponent(
            place.title.replace(/ /g, "_")
          )}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Read full history ↗";

        content.append(heading, description, link);
        card.appendChild(content);
        fragment.appendChild(card);
        count++;
      });

      grid.appendChild(fragment);
      status.textContent =
        `Found ${count} Wikipedia results for "${term}". ` +
        "Please verify each result's location before visiting.";
    } catch (error) {
      if (error.name === "AbortError") return;

      console.error("Live historical search error:", error);
      status.textContent =
        "Search failed. Check your internet connection and try again.";
    } finally {
      if (searchButton) {
        searchButton.disabled = false;
        searchButton.textContent = "Search Online";
      }
    }
  }

  form.addEventListener("submit", searchHistoricalPlaces);

  stateSelect.addEventListener("change", () => {
    if (input.value.trim()) {
      searchHistoricalPlaces();
    }
  });

  // Make the online search available to the Heritage Assistant if needed.
  window.searchOnlineHeritage = searchHistoricalPlaces;
})();
