
const CACHE_NAME='saaza-v18';
const URLS=[
  "./SAAZA_DCP_Layout.html",
  "./SAAZA_SPACI_Calculator.html",
  "./SAAZA_Mega_Deck.html",
  "./index.html",
  "./SAAZA_ALZ_Flashcards.html",
  "./SAAZA_Equipment_Checklist.html",
  "./SAAZA_Gradient_Calculator.html",
  "./SAAZA_Team_Lead_Checklist.html",
  "./SAAZA_DZ_Flashcards.html",
  "./SAAZA_Glossary.html",
  "./SAAZA_Reference_Search.html",
  "./SAAZA_DZ_Calculator.html",
  "./SAAZA_Flashcards.html",
  "./SAAZA_HLZ_Flashcards.html",
  "./SAAZA_DCP_Calculator.html",
  "./SAAZA_Coordinate_Converter.html",
  "./SAAZA_Process_Flashcards.html",
  "./SAAZA_Survey_Field_Guide.html",
  "./SAAZA_Overview_Flashcards.html",
  "./SAAZA_LZ_Trig_Calculator.html",
  "./SAAZA_Completion_Flashcards.html",
  "./SAAZA_Quick_Reference_Search.html",
  "./SAAZA_Forms_Flashcards.html",
  "./SAAZA_Field_Reference_Card.html",
  "./slides/slides_unit3_spaci.pdf",
  "./slides/slides_unit3_soil.pdf",
  "./slides/slides_unit2_1.pdf",
  "./slides/slides_unit2_3.pdf",
  "./slides/slides_unit2_2.pdf",
  "./slides/slides_unit1.pdf",
  "./slides/slides_unit4.pdf",
  "./slides/slides_unit5.pdf",
  "./refs/ufc_3_260_01_2019_c3.pdf",
  "./refs/ETL_97-9.pdf",
  "./refs/ETL_02-19.pdf",
  "./refs/TSPWG_3_260_03_02_19.pdf",
  "./refs/dafman13-217.pdf",
  "./refs/TM_3_34_48_2.pdf"
];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(URLS)));
 self.skipWaiting();
});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
 e.respondWith(
  caches.match(e.request).then(r=>r || fetch(e.request).then(resp=>{
    const copy=resp.clone();
    caches.open(CACHE_NAME).then(c=>c.put(e.request,copy));
    return resp;
  }).catch(()=>caches.match('./index.html')))
 );
});
