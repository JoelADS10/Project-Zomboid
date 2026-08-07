const { useState, useEffect } = React;
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

const livrosRaw = [
  ['Abate',               ['Butchering Basics', 'Meat Your Maker', 'Waste Not, Want Not', 'The Cuts That Count', 'Master Butcher']],
  ['Agricultura',         ['Grow Your Own', 'Seeds of Knowledge', 'Harvest Season', 'Advanced Cultivation', 'The Master Farmer']],
  ['Alvenaria',           ['Laying the Foundation', 'Brick by Brick', 'Advanced Masonry', "The Mason's Handbook", 'Master Mason']],
  ['Armadilhas',          ['Trapping 101', 'The Snare Master', 'Advanced Trapping', "Expert Trapper's Guide", 'Master Trapper']],
  ['Carpintaria',         ['The Woodcraft Manual Vol.1', 'The Woodcraft Manual Vol.2', 'The Woodcraft Manual Vol.3', 'The Woodcraft Manual Vol.4', 'The Woodcraft Manual Vol.5']],
  ['Cerâmica',            ['Clay and Kiln', 'Shaping the Earth', 'Advanced Pottery', "The Potter's Handbook", 'Master Potter']],
  ['Coleta',              ["Nature's Pantry", 'Wild Edibles Vol.1', 'Wild Edibles Vol.2', 'Advanced Foraging', 'Master Forager']],
  ['Costura',             ['Needlework Basics', 'Sew What', 'Advanced Tailoring', "The Tailor's Manual", 'Master Tailor']],
  ['Cuidados c/ Animais', ['Animal Husbandry Basics', 'Caring for Livestock', 'Advanced Animal Care', 'Expert Husbandry', 'Master Husbandman']],
  ['Culinária',           ['Cooking the Basics', 'Home Kitchen Vol.1', 'Home Kitchen Vol.2', 'Advanced Recipes', "Chef's Secrets"]],
  ['Elétrica',            ['Electricity for Beginners', 'Circuit Basics', 'Advanced Electrical', 'Expert Wiring', 'Master Electrician']],
  ['Lâmina Curta',        ['Short Blade Basics', 'Knife Skills Vol.1', 'Knife Skills Vol.2', 'Advanced Blade Work', 'Master Knife Fighter']],
  ['Lâmina Longa',        ['Sword Basics', 'Long Blade Techniques', 'Advanced Swordplay', 'Expert Blade Combat', 'Master Swordsman']],
  ['Machado',             ['Axe Handling Basics', 'The Wood Chopper', 'Advanced Axe Techniques', 'Expert Axe Combat', 'Master Axeman']],
  ['Mecânica',            ['Motor Head Vol.1', 'Motor Head Vol.2', 'Motor Head Vol.3', 'Motor Head Vol.4', 'Motor Head Vol.5']],
  ['Metalurgia',          ['Metalworking Basics', 'Forging Ahead', 'Advanced Metalwork', 'Expert Smith', 'Master Metalworker']],
  ['Pesca',               ["Gone Fishin'", "The Angler's Guide", 'Advanced Fishing', 'Expert Angler', 'Master Fisherman']],
  ['Pontaria',            ['Aiming Basics', 'Marksmanship Vol.1', 'Marksmanship Vol.2', 'Advanced Shooting', 'Master Marksman']],
  ['Primeiros Socorros',  ['First Aid Basics', 'Field Medicine Vol.1', 'Field Medicine Vol.2', 'Advanced First Aid', 'Expert Medic']],
  ['Recarregamento',      ['Reloading Basics', 'Ammo Crafting Vol.1', 'Ammo Crafting Vol.2', 'Advanced Reloading', 'Master Reloader']],
  ['Contundente Curto',   ['Short Blunt Basics', 'Club Techniques', 'Advanced Blunt Combat', 'Expert Brawler', 'Master Brawler']],
  ['Contundente Longo',   ['Long Blunt Basics', 'Staff and Bat Vol.1', 'Staff and Bat Vol.2', 'Advanced Heavy Blunt', 'Master Heavy Hitter']],
  ['Lança',               ['Spear Basics', 'The Pointy End', 'Advanced Spear Techniques', 'Expert Spearman', 'Master Spearman']],
  ['Corrida',             ['Fitness Basics', 'Running Strong', 'Advanced Cardio', 'Expert Runner', 'Master Sprinter']],
];

const livros = [];
livrosRaw.forEach(([skill, titles]) => {
  titles.forEach((title, i) => {
    livros.push({ id: `L-${skill}-${i}`, group: skill, label: `${skill} ${ROMAN[i]}: "${title}"` });
  });
});

const revistas = [
  { id: 'R-1',  group: 'Adesivos',             label: 'Adesivos 1: "Glue it Together"' },
  { id: 'R-2',  group: 'Adesivos',             label: 'Adesivos 2: "Stick to It"' },
  { id: 'R-3',  group: 'Adesivos',             label: 'Adesivos 3: "The Adhesive Master"' },
  { id: 'R-4',  group: 'Fab. de Munição',      label: 'Fabricação de Munição 1: "Make Your Own Ammo"' },
  { id: 'R-5',  group: 'Fab. de Munição',      label: 'Fabricação de Munição 2: "Reload Ready"' },
  { id: 'R-6',  group: 'Fab. de Munição',      label: 'Fabricação de Munição 3: "Ammo Master"' },
  { id: 'R-7',  group: 'Eletrônica',           label: 'Eletrônica 1: "Circuit Breaker"' },
  { id: 'R-8',  group: 'Eletrônica',           label: 'Eletrônica 2: "Advanced Circuits"' },
  { id: 'R-9',  group: 'Eletrônica',           label: 'Eletrônica 3: "Electronics Master"' },
  { id: 'R-10', group: 'Engenharia',           label: 'Engenharia 1: "Engineering Basics"' },
  { id: 'R-11', group: 'Engenharia',           label: 'Engenharia 2: "Advanced Engineering"' },
  { id: 'R-12', group: 'Engenharia',           label: 'Engenharia 3: "Master Engineer"' },
  { id: 'R-13', group: 'Agricultura',          label: 'Agricultura 1: "Farm Fresh"' },
  { id: 'R-14', group: 'Agricultura',          label: 'Agricultura 2: "The Green Thumb"' },
  { id: 'R-15', group: 'Agricultura',          label: 'Agricultura 3: "Master Cultivator"' },
  { id: 'R-16', group: 'Primeiros Socorros',   label: 'Primeiros Socorros 1: "Bandage Up"' },
  { id: 'R-17', group: 'Primeiros Socorros',   label: 'Primeiros Socorros 2: "Field Medicine"' },
  { id: 'R-18', group: 'Primeiros Socorros',   label: 'Primeiros Socorros 3: "Combat Medic"' },
  { id: 'R-19', group: 'Pesca',                label: 'Pesca 1: "Hook, Line and Sinker"' },
  { id: 'R-20', group: 'Pesca',                label: 'Pesca 2: "Advanced Angling"' },
  { id: 'R-21', group: 'Pesca',                label: 'Pesca 3: "Master Angler"' },
  { id: 'R-22', group: 'Mecânica Caseira',     label: 'Mecânica Caseira 1: "Shade Tree Mechanic"' },
  { id: 'R-23', group: 'Mecânica Caseira',     label: 'Mecânica Caseira 2: "Under the Hood"' },
  { id: 'R-24', group: 'Mecânica Caseira',     label: 'Mecânica Caseira 3: "Full Throttle"' },
  { id: 'R-25', group: 'Metalurgia',           label: 'Metalurgia 1: "Sparks Fly"' },
  { id: 'R-26', group: 'Metalurgia',           label: 'Metalurgia 2: "The Forge"' },
  { id: 'R-27', group: 'Metalurgia',           label: 'Metalurgia 3: "Master Smith"' },
  { id: 'R-28', group: 'Costura',              label: 'Costura 1: "Stitch by Stitch"' },
  { id: 'R-29', group: 'Costura',              label: 'Costura 2: "Tailor Made"' },
  { id: 'R-30', group: 'Costura',              label: 'Costura 3: "Sewing Master"' },
];

const vhsFilmes = [
  { id: 'VF-1',  group: 'Ação',           label: 'Termination 2' },
  { id: 'VF-2',  group: 'Ação',           label: 'Die Harderer' },
  { id: 'VF-3',  group: 'Ação',           label: 'Lethal Force 3' },
  { id: 'VF-4',  group: 'Ação',           label: 'Bloodbath Beach' },
  { id: 'VF-5',  group: 'Ação',           label: 'Maximum Overdrive Force' },
  { id: 'VF-6',  group: 'Terror',         label: 'Nightfall at Rosewood' },
  { id: 'VF-7',  group: 'Terror',         label: 'The Creeping Dead' },
  { id: 'VF-8',  group: 'Terror',         label: 'Revenge of the Blob' },
  { id: 'VF-9',  group: 'Terror',         label: "Halloween 4: Michael's Back" },
  { id: 'VF-10', group: 'Terror',         label: 'Slumber Party Massacre II' },
  { id: 'VF-11', group: 'Ficção Cient.',  label: 'Space Ranger IV' },
  { id: 'VF-12', group: 'Ficção Cient.',  label: 'Alien Overlords' },
  { id: 'VF-13', group: 'Ficção Cient.',  label: 'Robot Wars 2000' },
  { id: 'VF-14', group: 'Ficção Cient.',  label: 'Galaxy Command' },
  { id: 'VF-15', group: 'Ficção Cient.',  label: 'Invasion from Planet X' },
  { id: 'VF-16', group: 'Comédia',        label: 'Dude, Where is My Car?' },
  { id: 'VF-17', group: 'Comédia',        label: 'National Lampoon Goes Camping' },
  { id: 'VF-18', group: 'Comédia',        label: 'Party Animals 3' },
  { id: 'VF-19', group: 'Comédia',        label: 'Nerds in Paradise' },
  { id: 'VF-20', group: 'Comédia',        label: 'Road Trip USA' },
  { id: 'VF-21', group: 'Drama',          label: 'Steel City Blues' },
  { id: 'VF-22', group: 'Drama',          label: 'A River Runs Through It' },
  { id: 'VF-23', group: 'Drama',          label: 'Home Before Dark' },
  { id: 'VF-24', group: 'Drama',          label: 'The Last Summer' },
  { id: 'VF-25', group: 'Drama',          label: 'Blue Collar Dreams' },
  { id: 'VF-26', group: 'Western',        label: 'Gunslinger Justice' },
  { id: 'VF-27', group: 'Western',        label: 'Six Shooter Sally' },
  { id: 'VF-28', group: 'Western',        label: 'Badlands Showdown' },
  { id: 'VF-29', group: 'Western',        label: 'Dead Man Walking West' },
  { id: 'VF-30', group: 'Western',        label: 'Last Stand at Deadwood' },
  { id: 'VF-31', group: 'Animação',       label: 'Zom-B Cartoons Vol.1' },
  { id: 'VF-32', group: 'Animação',       label: 'Zom-B Cartoons Vol.2' },
  { id: 'VF-33', group: 'Animação',       label: 'Saturday Morning Hits' },
  { id: 'VF-34', group: 'Animação',       label: 'Cartoon Bonanza' },
  { id: 'VF-35', group: 'Animação',       label: 'Adventures in Toonland' },
];

const vhsSeries = [
  { id: 'VS-1',  group: 'Ação/Aventura',   label: 'Night Ranger Season 1' },
  { id: 'VS-2',  group: 'Ação/Aventura',   label: 'Night Ranger Season 2' },
  { id: 'VS-3',  group: 'Ação/Aventura',   label: 'SWAT Team Season 1' },
  { id: 'VS-4',  group: 'Ação/Aventura',   label: 'SWAT Team Season 2' },
  { id: 'VS-5',  group: 'Ação/Aventura',   label: 'Outlaws Season 1' },
  { id: 'VS-6',  group: 'Drama',           label: 'County General Season 1' },
  { id: 'VS-7',  group: 'Drama',           label: 'County General Season 2' },
  { id: 'VS-8',  group: 'Drama',           label: 'County General Season 3' },
  { id: 'VS-9',  group: 'Drama',           label: 'Small Town Stories Season 1' },
  { id: 'VS-10', group: 'Drama',           label: 'Small Town Stories Season 2' },
  { id: 'VS-11', group: 'Comédia',         label: 'Laugh Track Season 1' },
  { id: 'VS-12', group: 'Comédia',         label: 'Laugh Track Season 2' },
  { id: 'VS-13', group: 'Comédia',         label: 'Happy Families Season 1' },
  { id: 'VS-14', group: 'Comédia',         label: 'Happy Families Season 2' },
  { id: 'VS-15', group: 'Comédia',         label: "The Office... not that one S1" },
  { id: 'VS-16', group: 'Terror',          label: 'Creepy Crawlies Season 1' },
  { id: 'VS-17', group: 'Terror',          label: 'Creepy Crawlies Season 2' },
  { id: 'VS-18', group: 'Terror',          label: 'Midnight Scares Season 1' },
  { id: 'VS-19', group: 'Terror',          label: 'Midnight Scares Season 2' },
  { id: 'VS-20', group: 'Terror',          label: 'Ghost Hunters Season 1' },
  { id: 'VS-21', group: 'Documentário',    label: 'Wild America Season 1' },
  { id: 'VS-22', group: 'Documentário',    label: 'Wild America Season 2' },
  { id: 'VS-23', group: 'Documentário',    label: 'Planet Our Home Season 1' },
  { id: 'VS-24', group: 'Documentário',    label: 'Planet Our Home Season 2' },
  { id: 'VS-25', group: 'Documentário',    label: 'Deep Sea Mysteries' },
  { id: 'VS-26', group: 'Ficção Cient.',   label: 'Star Voyager Season 1' },
  { id: 'VS-27', group: 'Ficção Cient.',   label: 'Star Voyager Season 2' },
  { id: 'VS-28', group: 'Ficção Cient.',   label: 'Quantum Leap Season 1' },
  { id: 'VS-29', group: 'Ficção Cient.',   label: 'Alien Files Season 1' },
  { id: 'VS-30', group: 'Ficção Cient.',   label: 'Alien Files Season 2' },
];

const vhsCaseiro = [
  { id: 'VC-1',  group: 'Família',   label: "Bob's Birthday Party 1985" },
  { id: 'VC-2',  group: 'Família',   label: "Summer Vacation at the Lake '88" },
  { id: 'VC-3',  group: 'Família',   label: "Christmas Morning '89" },
  { id: 'VC-4',  group: 'Família',   label: 'Graduation Day 1987' },
  { id: 'VC-5',  group: 'Família',   label: "Wedding Day - June '86" },
  { id: 'VC-6',  group: 'Esporte',   label: 'Little League Championship 1990' },
  { id: 'VC-7',  group: 'Esporte',   label: "Tommy's Soccer Practice" },
  { id: 'VC-8',  group: 'Esporte',   label: 'The Big Game - Homecoming 1989' },
  { id: 'VC-9',  group: 'Esporte',   label: 'Fishing Trip with Dad' },
  { id: 'VC-10', group: 'Esporte',   label: 'Hunting Season 1988' },
  { id: 'VC-11', group: 'Perigoso',  label: 'Night of the Knox Incident' },
  { id: 'VC-12', group: 'Perigoso',  label: 'Project Eden Report' },
  { id: 'VC-13', group: 'Perigoso',  label: 'Emergency Broadcast Recording' },
  { id: 'VC-14', group: 'Perigoso',  label: 'Classified Research Notes' },
  { id: 'VC-15', group: 'Perigoso',  label: 'Last Message from Shelter 12' },
  { id: 'VC-16', group: 'DIY',       label: "Handyman Harry's Home Tips Vol.1" },
  { id: 'VC-17', group: 'DIY',       label: "Handyman Harry's Home Tips Vol.2" },
  { id: 'VC-18', group: 'DIY',       label: 'Garden of Eden Home Garden Guide' },
  { id: 'VC-19', group: 'DIY',       label: 'Build It Yourself: Shelving' },
  { id: 'VC-20', group: 'DIY',       label: 'Home Electrical Tips' },
  { id: 'VC-21', group: 'Aulas',     label: 'Aerobics with Linda Vol.1' },
  { id: 'VC-22', group: 'Aulas',     label: 'Aerobics with Linda Vol.2' },
  { id: 'VC-23', group: 'Aulas',     label: 'Learn to Cook with Chef Marcel' },
  { id: 'VC-24', group: 'Aulas',     label: 'Self Defense Basics' },
  { id: 'VC-25', group: 'Aulas',     label: 'Guitar Lessons for Beginners' },
  { id: 'VC-26', group: 'Eventos',   label: 'Muldraugh County Fair 1990' },
  { id: 'VC-27', group: 'Eventos',   label: 'West Point Summer Festival 1988' },
  { id: 'VC-28', group: 'Eventos',   label: 'March Valley Rodeo 1989' },
  { id: 'VC-29', group: 'Eventos',   label: 'Knox County Talent Show 1987' },
  { id: 'VC-30', group: 'Eventos',   label: 'Riverside Community Parade 1990' },
  { id: 'VC-31', group: 'Mistério',  label: 'Tape Found in Old House' },
  { id: 'VC-32', group: 'Mistério',  label: 'Unknown Recording - No Label' },
  { id: 'VC-33', group: 'Mistério',  label: 'Static... Then Something Else' },
  { id: 'VC-34', group: 'Mistério',  label: "Don't Watch This" },
  { id: 'VC-35', group: 'Mistério',  label: 'The Tape With No Name' },
];

const TABS = [
  { key: 'livros',     emoji: '📚', label: 'Livros',      data: livros },
  { key: 'revistas',   emoji: '📰', label: 'Revistas',    data: revistas },
  { key: 'vhsFilmes',  emoji: '🎬', label: 'VHS Filmes',  data: vhsFilmes },
  { key: 'vhsSeries',  emoji: '📺', label: 'VHS Séries',  data: vhsSeries },
  { key: 'vhsCaseiro', emoji: '🏠', label: 'VHS Caseiro', data: vhsCaseiro },
];

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

function App() {
  const [activeTab, setActiveTab] = useState('livros');
  const [collected, setCollected] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pz-b42-checklist') || '{}'); }
    catch { return {}; }
  });
  const [search, setSearch] = useState('');
  const [showOnly, setShowOnly] = useState('all'); // 'all' | 'pending' | 'done'

  useEffect(() => {
    localStorage.setItem('pz-b42-checklist', JSON.stringify(collected));
  }, [collected]);

  const toggle = (id) => setCollected(prev => ({ ...prev, [id]: !prev[id] }));

  const currentTab = TABS.find(t => t.key === activeTab);
  const allData = currentTab.data;

  const filtered = allData.filter(item => {
    const matchSearch = item.label.toLowerCase().includes(search.toLowerCase());
    const matchFilter = showOnly === 'all' || (showOnly === 'done' ? collected[item.id] : !collected[item.id]);
    return matchSearch && matchFilter;
  });

  const total = allData.length;
  const done = allData.filter(i => collected[i.id]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const groups = groupBy(filtered, 'group');

  const resetTab = () => {
    const ids = allData.map(i => i.id);
    setCollected(prev => { const n = {...prev}; ids.forEach(id => delete n[id]); return n; });
  };

  const totalAll = TABS.reduce((s, t) => s + t.data.length, 0);
  const doneAll  = TABS.reduce((s, t) => s + t.data.filter(i => collected[i.id]).length, 0);

  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: '#111', minHeight: '100vh', color: '#ddd' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(90deg,#1a0000,#2a0a0a)', padding: '14px 18px', borderBottom: '2px solid #8b0000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 'bold', color: '#ff4444', letterSpacing: 1 }}>
            ☣ PROJECT ZOMBOID B42
          </div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>
            Progresso total: {doneAll}/{totalAll} itens coletados
          </div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 'bold', color: doneAll === totalAll ? '#00e676' : '#ff6b6b' }}>
          {Math.round((doneAll / totalAll) * 100)}%
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: '#0d0d0d', borderBottom: '1px solid #2a2a2a', overflowX: 'auto' }}>
        {TABS.map(tab => {
          const tabDone = tab.data.filter(i => collected[i.id]).length;
          const isActive = activeTab === tab.key;
          return (
            <button key={tab.key} onClick={() => { setActiveTab(tab.key); setSearch(''); setShowOnly('all'); }}
              style={{
                flex: '0 0 auto', padding: '10px 14px', background: isActive ? '#1a0000' : 'transparent',
                border: 'none', borderBottom: isActive ? '3px solid #ff4444' : '3px solid transparent',
                color: isActive ? '#ff6b6b' : '#666', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}>
              {tab.emoji} {tab.label}
              <span style={{ marginLeft: 6, fontSize: 11, color: tabDone === tab.data.length && tabDone > 0 ? '#00e676' : '#888' }}>
                {tabDone}/{tab.data.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ padding: '10px 16px', background: '#151515', borderBottom: '1px solid #222', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Progress bar */}
        <div style={{ flex: '1 1 100%', marginBottom: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#888', marginBottom: 4 }}>
            <span>{done}/{total} coletados nesta aba</span>
            <span>{pct}%</span>
          </div>
          <div style={{ background: '#2a2a2a', borderRadius: 4, height: 6, overflow: 'hidden' }}>
            <div style={{ width: pct + '%', height: '100%', background: pct === 100 ? '#00e676' : '#ff4444', transition: 'width 0.4s ease', borderRadius: 4 }} />
          </div>
        </div>
        {/* Search */}
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="🔍 Buscar item..."
          style={{ flex: '1 1 160px', background: '#222', border: '1px solid #444', borderRadius: 6, padding: '6px 10px', color: '#ddd', fontFamily: 'inherit', fontSize: 13, outline: 'none' }}
        />
        {/* Filter */}
        {['all', 'pending', 'done'].map(f => (
          <button key={f} onClick={() => setShowOnly(f)}
            style={{
              padding: '6px 12px', borderRadius: 6, border: '1px solid',
              borderColor: showOnly === f ? '#ff4444' : '#333',
              background: showOnly === f ? '#3a0000' : '#1a1a1a',
              color: showOnly === f ? '#ff6b6b' : '#666',
              cursor: 'pointer', fontSize: 12, fontFamily: 'inherit',
            }}>
            {f === 'all' ? 'Todos' : f === 'pending' ? 'Pendentes' : 'Coletados'}
          </button>
        ))}
        <button onClick={resetTab}
          style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #550000', background: '#1a0000', color: '#cc3333', cursor: 'pointer', fontSize: 12, fontFamily: 'inherit', marginLeft: 'auto' }}>
          ↺ Resetar aba
        </button>
      </div>

      {/* Items */}
      <div style={{ padding: '12px 16px', paddingBottom: 40 }}>
        {Object.keys(groups).length === 0 && (
          <div style={{ textAlign: 'center', color: '#555', marginTop: 40, fontSize: 14 }}>Nenhum item encontrado.</div>
        )}
        {Object.entries(groups).map(([group, items]) => (
          <div key={group} style={{ marginBottom: 20 }}>
            {/* Group header */}
            <div style={{
              background: '#1e1e1e', borderLeft: '4px solid #8b0000',
              padding: '6px 12px', marginBottom: 6, fontSize: 12,
              color: '#ff6b6b', fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase',
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>{group}</span>
              <span style={{ color: '#666', fontWeight: 'normal' }}>
                {items.filter(i => collected[i.id]).length}/{items.length}
              </span>
            </div>
            {/* Items in group */}
            {items.map(item => {
              const isCollected = !!collected[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  style={{
                    display: 'flex', alignItems: 'center', width: '100%',
                    padding: '11px 14px', marginBottom: 4,
                    background: isCollected ? '#0d2b0d' : '#1a1a1a',
                    border: `1px solid ${isCollected ? '#1f5c1f' : '#2a2a2a'}`,
                    borderRadius: 6, cursor: 'pointer', textAlign: 'left',
                    color: isCollected ? '#4caf50' : '#ccc',
                    fontFamily: 'inherit', fontSize: 13,
                    transition: 'all 0.15s',
                    boxShadow: isCollected ? 'inset 0 0 0 1px #1f5c1f' : 'none',
                  }}
                >
                  {/* Checkbox visual */}
                  <span style={{
                    width: 26, height: 26, borderRadius: 5, flexShrink: 0, marginRight: 12,
                    border: `2px solid ${isCollected ? '#4caf50' : '#555'}`,
                    background: isCollected ? '#4caf50' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, transition: 'all 0.15s',
                  }}>
                    {isCollected ? '✓' : ''}
                  </span>
                  <span style={{ textDecoration: isCollected ? 'line-through' : 'none', opacity: isCollected ? 0.6 : 1 }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}