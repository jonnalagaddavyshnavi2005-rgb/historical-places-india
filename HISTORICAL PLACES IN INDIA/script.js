
const placeholder = "https://via.placeholder.com/800x500?text=Image+Unavailable";

const places = [
  { name: "Taj Mahal", state: "Uttar Pradesh", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrDPCj9xtSS8IhE_scN8oF4XsFKufAro22w&s",details:"The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year while giving birth to their 14th child, Gauhara Begum.", wiki: "https://en.wikipedia.org/wiki/Taj_Mahal" },
  { name: "Red Fort", state: "Delhi", img:"https://www.shutterstock.com/shutterstock/photos/1199337631/display_1500/stock-photo-red-fort-delhi-india-with-india-flag-flying-high-1199337631.jpg",details:"Emperor Shah Jahan commissioned the construction of the Red Fort on 12 May 1639, following his decision to shift his capital from Agra to Delhi.", wiki: "https://en.wikipedia.org/wiki/Red_fort" },
  { name: "Humayun's Tomb", state: "Delhi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0pNw2Qq_Lm90NO0UC-A7GxVXUYwiZl_Nsw&s", details: "Mughal tomb precursor to Taj Mahal.After his death on 27 January 1556, Humayun's body was first buried in his palace in Purana Quila at Delhi.", wiki: "https://en.wikipedia.org/wiki/Humayun%27s_Tomb" },
  { name: "India Gate", state: "Delhi", img: "https://www.trawell.in/admin/images/upload/078212929Delhi_India_Gate_Main.jpg", details: "War memorial in New Delhi.The India Gate was part of the work of the Imperial War Graves Commission, which came into existence in December 1917 under the British rule for building war graves and memorials to soldiers who were killed in the First World War.", wiki: "https://en.wikipedia.org/wiki/India_Gate" },
  { name: "Jama Masjid", state: "Delhi", img: "https://www.shutterstock.com/image-photo/jama-masjid-principal-mosque-old-260nw-194883437.jpg", details: "One of the largest mosques in India.The Masjid-i-Jehan-Numa, commonly known as the Jama Masjid, in Old Delhi area of Delhi, is one of the largest mosques in India.", wiki: "https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi" },
  { name: "Mysore Palace", state: "Karnataka", img: "https://plus.unsplash.com/premium_photo-1697730407028-1c602ffb2e81?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fHww", details: "Grand palace in Mysore. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.", wiki: "https://en.wikipedia.org/wiki/Mysore_Palace" },
  { name: "Hampi", state: "Karnataka", img: "https://www.stayvista.com/blog/wp-content/uploads/2024/09/Hampi_karnataka.jpg", details: "Ruins of Vijayanagara Empire. Hampi predates the Vijayanagara Empire; it is mentioned in the Ramayana and the Puranas of Hinduism as Pampa Devi Tirtha Kshetra.", wiki: "https://en.wikipedia.org/wiki/Hampi" },
  { name: "Konark Sun Temple", state: "Odisha", img: "https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg", details: "13th-century temple shaped like a chariot.The temple is attributed to king Narasingha Deva I of the Eastern Ganga dynasty about 1250 CE.[", wiki: "https://en.wikipedia.org/wiki/Konark_Sun_Temple" },
  { name: "Jagannath Temple", state: "Odisha", img: "https://phool.co/cdn/shop/articles/172017492135594.jpg?v=1726044181", details: "Ancient Hindu temple, famous for Rath Yatra.The Jagannath Temple is a Hindu temple dedicated to the god Jagannath, a form of Vishnu in Hinduism. It is located in Puri in the state of Odisha, situated on the eastern coast of India.", wiki: "https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri" },
  { name: "Ajanta Caves", state: "Maharashtra", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/330px-Ajanta_%2863%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",details: "The Ajanta Caves are ancient Buddhist rock-cut caves in Maharashtra, famous for their paintings, sculptures, and historic artwork.", wiki: "https://en.wikipedia.org/wiki/Ajanta_Caves" },
  { name: "Ellora Caves", state: "Maharashtra", img: "https://www.worldhistory.org/img/r/p/1500x1500/4565.jpg", details: "Rock-cut caves with Hindu, Buddhist, Jain monuments.It is one of the largest rock-cut cave complexes in the world, with artwork dating from AD 600–1000, including Hindu, Buddhist, and Jain caves.", wiki: "https://en.wikipedia.org/wiki/Ellora_Caves" },
  { name: "Gateway of India", state: "Maharashtra", img: "https://t3.ftcdn.net/jpg/02/00/55/94/360_F_200559473_wEDZgxSDPPjQfgX3sQqXcjz4ph1a79Yt.jpg", details: "Colonial-era arch monument in Mumbai.The Gateway of India is an arch-monument completed in 1924 on the waterfront of Mumbai, Maharashtra, India.", wiki: "https://en.wikipedia.org/wiki/Gateway_of_India" },
  { name: "Elephanta Caves", state: "Maharashtra", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGua3N3BjoGwOxp6--nr29tOpiY3yfWWYOOg&s", details: "Cave temples near Mumbai.The Elephanta Caves are a collection of cave temples predominantly dedicated to the Hindu god Shiva.", wiki: "https://en.wikipedia.org/wiki/Elephanta_Caves" },
  { name: "Charminar", state: "Telangana", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJA7hUhHcU0m50h9DSNwTa0I-ZOe620Mpx5g&s", details: "Iconic mosque in Hyderabad. Constructed in 1591, the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana", wiki: "https://en.wikipedia.org/wiki/Charminar" },
  { name: "Golconda Fort", state: "Telangana", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O5pKOKVr5JbMlzG8kr3yU3vXizUoPGQstw&s", details: "Historic fort near Hyderabad.The fort was originally built by Kakatiya ruler Pratāparudra in the 11th century out of mud walls.", wiki: "https://en.wikipedia.org/wiki/Golconda" },
  { name: "Victoria Memorial", state: "West Bengal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0vvm7Gut0bjviOg2D21ynIZ-ZhzbON5-b7-DR4ygCCwtBhPzT0Y17wi3riW4My2dM_s&usqp=CAU", details: "Colonial-era marble monument in Kolkata.The Victoria Memorial is a large marble monument in the Maidan in Central Kolkata (Calcutta), having its entrance on the Queen's Way. It was built between 1906 and 1921 by the British Raj. ", wiki: "https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata" },
  { name: "Belur & Halebidu Temples", state: "Karnataka", img: "https://mediaindia.eu/wp-content/uploads/2018/06/belur.jpg", details: "Hoysala-era temples known for detailed stone carvings.It is the largest monument in Halebidu, a town in the state of Karnataka, India and the former capital of the Hoysala Empire." , wiki: "https://en.wikipedia.org/wiki/Hoysaleswara_Temple"},
  { name: "Meenakshi Temple (Madurai)", state: "Tamil Nadu", img: "https://www.tusktravel.com/blog/wp-content/uploads/2022/07/Meenakshi-Temple-in-Madurai.jpg", details: "Famous multi-towered temple complex in Madurai with long history.Arulmigu Meenakshi Sundareswarar Temple, also known as Arulmigu Meenakshi Amman Thirukkovil, is a historic Hindu temple located on the southern bank of the Vaigai River[3] in the temple city[4] of Madurai, Tamil Nadu, India.", wiki: "https://en.wikipedia.org/wiki/Meenakshi_Temple"},
  { name: "Brihadeeswarar Temple (Thanjavur)", state: "Tamil Nadu", img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-brihadeeswarar-temple-thanjavur-tamil-nadu-attr-hero?qlt=82&ts=1742170442234", details: "Great Chola temple, UNESCO site, with massive vimana (tower).The original monuments of this 11th-century temple were built around a moat. It included gopura, the main temple, its massive tower, inscriptions, frescoes, and sculptures predominantly related to Shaivism, but also of Vaishnavism and Shaktism." , wiki: "https://en.wikipedia.org/wiki/Brihadeeswarar_Temple"},
  { name: "Srirangam Temple", state: "Tamil Nadu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTNv2uvcUZDoIaA2Y-NPrb95PSi2b1WtCMQ&s", details: "One of the largest functioning Hindu temple complexes in the world.The Ranganathaswamy Temple is a Hindu temple dedicated to Ranganatha (a form of Vishnu) and his consort Ranganayaki (a form of Lakshmi). The temple is located in Srirangam, Tiruchirapalli, Tamil Nadu, India." , wiki: "https://en.wikipedia.org/wiki/Ranganathaswamy_Temple,_Srirangam"},
  { name: "Kumbhalgarh Fort", state: "Rajasthan", img: "https://s7ap1.scene7.com/is/image/incredibleindia/2-kumbhalgarh-fort-udaipur-rajasthan-attr-hero?qlt=82&ts=1742175707597s", details: "Massive Mewar fort with long ramparts set in Aravalli hills.Kumbhalgarh also known as the Great Wall of India,[2] is a fortress located on the western range of the Aravalli Hills in Kumbhalgarh, Rajsamand district, Rajasthan, India.", wiki: "https://en.wikipedia.org/wiki/Kumbhalgarh_Fort "},
  { name: "Chittorgarh Fort", state: "Rajasthan", img: "https://static.toiimg.com/photo/50900339.cms", details: "Historic Rajput fort with many palaces and temples.Chittorgarh (literally Chittor Fort), also known as Chittod Fort, is one of the largest forts in India.", wiki: "https://en.wikipedia.org/wiki/Chittorgarh_Fort "},
  { name: "Nalanda University Ruins", state: "Bihar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_IdEhHFaPO7VQAWj_gU6s2huMcIfC-gDcA&s", details: "Nalanda (IAST: Nālandā, pronounced [naːlən̪d̪aː]) was a renowned Buddhist mahavihara (great monastery) in medieval Magadha (modern-day Bihar), eastern India." , wiki: "https://en.wikipedia.org/wiki/Nalanda_mahavihara"},
  { name: "Patna Sahib Gurudwara", state: "Bihar", img: "https://www.pmc.bihar.gov.in/assets/img/patna%20sahib.jpg", details: "Birthplace of Guru Gobind Singh, an important Sikh pilgrimage site.Guru Gobind Singh, the tenth Sikh Guru, was born in Patna, Mughal Empire on 22 December 1666.[1][2] He spent his early years here before moving to Anandpur Sahib." , wiki: "https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib"},
  { name: "Shravanabelagola", state: "Karnataka", img: "https://seawatersports.com/images/places/shravanabelagola.jpg", details: "Giant monolithic statue of Gommateshwara and important Jain pilgrimage site.The Gommateshwara Bahubali statue at Shravanabelagola is one of the most important tirthas (pilgrimage destinations) in Jainism, one that reached a peak in architectural and sculptural activity under the patronage of Western Ganga dynasty of Talakad." , wiki: "https://en.wikipedia.org/wiki/Shravanabelagola"},
  { name: "Kailasa Temple (Ellora)", state: "Maharashtra", img: "https://cdn-images.prepp.in/public/image/b53819791e67ebe89abc8d09f299e5c1.png?tr=w-512,h-341,c-force", details: "Massive rock-cut monolithic temple at Ellora representing Hindu architecture.A megalith carved into a cliff face, it is considered one of the most remarkable cave temples in the world because of its size, architecture, and sculptural treatment.", wiki: "https://en.wikipedia.org/wiki/Kailasa_Temple,_Ellora" },
  {name: "Char Dham Temples (Badrinath, Kedarnath, Gangotri, Yamunotri)", state: "Uttarakhand", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdB2s4Lnl6uxrVlsYdP2iHADdk3zUNAJFPA&s", details: "Four sacred pilgrimage sites in the Himalaya visited by devotees.The Char Dham is not to be confused with the Chota Char Dham which comprises Yamunotri, Gangotri, Kedarnath, Badrinath. It is a Hindu pilgrimage circuit in Uttarakhand which was named by the religious tourism industry.",wiki:"https://en.wikipedia.org/wiki/Char_Dham" },
  {name: "Sanchi Stupa", state: "Madhya Pradesh", img: "https://imgcld.yatra.com/holiday-india/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1441881605/blog/The_Sanchi_Stupas.jpg", details: "Ancient Buddhist complex with stupas dating back to the Mauryan period.Sanchi Stupa is a Buddhist complex, famous for its Great Stupa, on a hilltop at Sanchi Town in Raisen District of the State of Madhya Pradesh, India.",wiki:"https://en.wikipedia.org/wiki/Sanchi_Stupa"},
  { name: "Rani ki Vav (Patan)", state: "Gujarat", img: "https://seawatersports.com/images/places/rani-ki-vav.jpg", details: "Stepwell built as a memorial, UNESCO World Heritage Site noted for sculptures.It is located on the banks of the Saraswati River. Its construction is attributed to Udayamati, the spouse of the 11th-century Chaulukya king Bhima I. ",wiki:"https://en.wikipedia.org/wiki/Rani_ki_Vav" },
  { name: "Qutub Minar", state: "Delhi", img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/143BF/production/_124897828_gettyimages-541363304-170667a.jpg.webp", details: "Tall brick minaret started by Qutb-ud-din Aibak in 1193; UNESCO site.The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and victory tower comprising the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs.[",wiki:"https://en.wikipedia.org/wiki/Qutb_Minar" },
];

const stateSet = new Set();
places.forEach(p => stateSet.add(p.state));
const stateFilter = document.getElementById("stateFilter");
[...stateSet].sort().forEach(s => {
  const opt = document.createElement("option");
  opt.value = s;
  opt.textContent = s;
  stateFilter.appendChild(opt);
});

const placesContainer = document.getElementById("places");

function createCard(place, idx) {
  const card = document.createElement("article");
  card.className = "card";
  const img = place.img && place.img.trim() ? place.img : placeholder;

  card.innerHTML = `
    <img class="thumb" src="${img}" alt="${place.name}">
    <div class="card-body">
      <h3>${place.name}</h3>
      <div class="meta">${place.state}</div>
      <div class="btn-row">
        <button class="button" data-index="${idx}">Show details</button>
        <button class="button secondary" onclick="openWiki('${encodeURIComponent(place.name)}')">Wikipedia</button>
      </div>
      <div class="details" id="details-${idx}" style="display:none;">${place.details}</div>
    </div>
  `;
  return card;
}

function render(list) {
  placesContainer.innerHTML = "";
  if (!list.length) {
    placesContainer.innerHTML = "<p style='grid-column:1/-1;color:#666'>No places found.</p>";
    return;
  }
  list.forEach((p, i) => {
    placesContainer.appendChild(createCard(p, i));
  });
  
  document.querySelectorAll(".button[data-index]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.currentTarget.dataset.index;
      const d = document.getElementById(`details-${i}`);
      if (!d) return;
      d.style.display = d.style.display === "block" ? "none" : "block";
      e.currentTarget.textContent = d.style.display === "block" ? "Hide details" : "Show details";
    });
  });
}

function openWiki(q) {
  window.open(`https://en.wikipedia.org/wiki/${q}`, "_blank");
}

render(places);

const search = document.getElementById("search");
search.addEventListener("input", applyFilters);
stateFilter.addEventListener("change", applyFilters);

function applyFilters() {
  const q = search.value.trim().toLowerCase();
  const sf = stateFilter.value;
  const filtered = places.filter(p => {
    const matchName = p.name.toLowerCase().includes(q) || p.details.toLowerCase().includes(q);
    const matchState = sf ? p.state === sf : true;
    return matchName && matchState;
  });
  render(filtered);
}


/* ===== Added features: text-to-speech and an on-page Heritage Assistant =====
   The original places array, search, state filter, details toggle and Wikipedia
   links are preserved. The assistant is a local demo, not a cloud AI model.
*/
const originalRender = render;
render = function(list) {
  originalRender(list);
  enhancePlaceCards();
};

let activeSpeechButton = null;

function speakText(text, button) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    addAssistantMessage("Your browser does not support voice reading. Please try the latest Chrome or Edge.", "assistant");
    return;
  }
  if (window.speechSynthesis.speaking && activeSpeechButton === button) {
    window.speechSynthesis.cancel();
    if (activeSpeechButton) activeSpeechButton.textContent = "🔊 Listen";
    activeSpeechButton = null;
    return;
  }
  window.speechSynthesis.cancel();
  if (activeSpeechButton) activeSpeechButton.textContent = "🔊 Listen";
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 0.92;
  utterance.pitch = 1;
  activeSpeechButton = button;
  button.textContent = "■ Stop reading";
  utterance.onend = utterance.onerror = () => {
    if (activeSpeechButton === button) {
      button.textContent = "🔊 Listen";
      activeSpeechButton = null;
    }
  };
  window.speechSynthesis.speak(utterance);
}

function enhancePlaceCards() {
  document.querySelectorAll("#places .card").forEach(card => {
    const row = card.querySelector(".btn-row");
    const heading = card.querySelector("h3");
    const details = card.querySelector(".details");
    if (!row || !heading || !details || row.querySelector(".voice-button")) return;
    const voiceButton = document.createElement("button");
    voiceButton.type = "button";
    voiceButton.className = "button voice-button";
    voiceButton.textContent = "🔊 Listen";
    voiceButton.setAttribute("aria-label", "Read " + heading.textContent + " details aloud");
    voiceButton.addEventListener("click", () => {
      const speech = heading.textContent + ". " + card.querySelector(".meta").textContent + ". " + details.textContent;
      speakText(speech, voiceButton);
    });
    row.appendChild(voiceButton);
  });
}

const assistantPanel = document.getElementById("assistantPanel");
const assistantLauncher = document.getElementById("assistantLauncher");
const assistantClose = document.getElementById("assistantClose");
const assistantForm = document.getElementById("assistantForm");
const assistantInput = document.getElementById("assistantInput");
const chatMessages = document.getElementById("chatMessages");

function setAssistantOpen(open) {
  assistantPanel.classList.toggle("is-hidden", !open);
  assistantLauncher.setAttribute("aria-expanded", String(open));
  if (open) assistantInput.focus();
}
assistantLauncher.addEventListener("click", () => setAssistantOpen(assistantPanel.classList.contains("is-hidden")));
assistantClose.addEventListener("click", () => setAssistantOpen(false));

function addAssistantMessage(message, sender) {
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble " + (sender === "user" ? "user-bubble" : "assistant-bubble");
  bubble.textContent = message;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function answerHeritageQuestion(question) {
  const q = question.toLowerCase().trim();
  if (!q) return "Please type a question about a historical place.";
  const matchedPlace = places.find(p => q.includes(p.name.toLowerCase()) ||
    p.name.toLowerCase().split(/[ ()&,]+/).filter(word => word.length > 3).some(word => q.includes(word)));
  if (matchedPlace) {
    return matchedPlace.name + " — " + matchedPlace.state + "\n\n" + matchedPlace.details +
      "\n\nWould you like to learn more? Use the Wikipedia button on its place card.";
  }
  const matchedState = [...new Set(places.map(p => p.state))]
    .find(state => q.includes(state.toLowerCase()));
  if (matchedState) {
    const names = places.filter(p => p.state === matchedState).map(p => p.name);
    return "Historical places listed for " + matchedState + ":\n• " + names.join("\n• ") +
      "\n\nUse the state filter above to view these places.";
  }
  if (q.includes("suggest") || q.includes("recommend") || q.includes("where should") || q.includes("start")) {
    const suggestions = places.filter(p => ["Taj Mahal", "Hampi", "Konark Sun Temple", "Ajanta Caves"].includes(p.name));
    return "Here are a few places to start exploring:\n" + suggestions.map(p => "• " + p.name + " (" + p.state + ")").join("\n") +
      "\n\nChoose a card to read its history or use Listen to hear the text.";
  }
  if (q.includes("how many") || q.includes("total") || q.includes("list") || q.includes("all places")) {
    return "This project currently contains " + places.length + " historical place entries across " +
      new Set(places.map(p => p.state)).size + " states or union territories. Use the search box and state filter to explore them.";
  }
  if (q.includes("voice") || q.includes("read") || q.includes("listen") || q.includes("speak")) {
    return "Select the “🔊 Listen” button on any place card to hear its name, state and historical description. Select “Stop reading” to stop playback.";
  }
  return "I can help with the places included in this project. Try asking “Tell me about Taj Mahal”, “Show places in Delhi”, or “Suggest a place to explore”. This demo answers from the built-in project data rather than a live AI service.";
}

function submitAssistantQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addAssistantMessage(cleanQuestion, "user");
  assistantInput.value = "";
  addAssistantMessage(answerHeritageQuestion(cleanQuestion), "assistant");
}
assistantForm.addEventListener("submit", event => {
  event.preventDefault();
  submitAssistantQuestion(assistantInput.value);
});
document.querySelectorAll(".prompt-chip").forEach(button => {
  button.addEventListener("click", () => submitAssistantQuestion(button.dataset.prompt || ""));
});

// Re-run the added card enhancement after the original search/filter re-renders cards.
enhancePlaceCards();
document.querySelectorAll("#places").forEach(container => {
  const observer = new MutationObserver(() => enhancePlaceCards());
  observer.observe(container, { childList: true });
});

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Automatically update footer year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
