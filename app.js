// ===== DATABASE (localStorage) =====
const DB = {
  get: (k) => { try { return JSON.parse(localStorage.getItem('siap_' + k)) || null; } catch { return null; } },
  set: (k, v) => localStorage.setItem('siap_' + k, JSON.stringify(v)),
  del: (k) => localStorage.removeItem('siap_' + k)
};

// ===== SEED DATA =====
function initDB() {
  if (!DB.get('initialized')) {
    const users = [
      {
        id: 'u1', nip: '123456789', nama: 'Admin', golongan: 'PPPK',
        pangkat: 'IX', jabatan: 'Penata Kelola Pemilu', unit: 'KPU Kab. Sarolangun',
        email: 'dederikysatrya@gmail.com', hp: '082307731105',
        username: 'Admin', password: 'Astaga17', role: 'admin', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Admin&background=3b5bdb&color=fff&size=80'
      },
      {
        id: 'u2', nip: '197511102009101001', nama: 'Aswal', golongan: 'PNS',
        pangkat: 'IVa', jabatan: 'Sekretaris', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Aswal', password: 'Aswal', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u3', nip: '197410022006042008', nama: 'Mutiyah Pitri', golongan: 'PNS',
        pangkat: 'IIId', jabatan: 'Kasubbag Hukum dan SDM', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Mutiyah', password: 'Mutiyah', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u4', nip: '198312132010121002', nama: 'Wahyu Roma Primadona', golongan: 'PNS',
        pangkat: 'IIId', jabatan: 'Kasubbag KUL', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Wahyu', password: 'Wahyu', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u5', nip: '198802062010122003', nama: 'Ria Dwijayanti.GM', golongan: 'PNS',
        pangkat: 'IIId', jabatan: 'Kasubbag Rendatin', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Riri', password: 'Riri', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u6', nip: '1984062912008011002', nama: 'Mujiono', golongan: 'PNS',
        pangkat: 'IIIc', jabatan: 'Kasubbag Teknis dan Parhubmas', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Mujiono', password: 'Mujiono', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u7', nip: '198701162009121003', nama: 'Ahmad Jumadil', golongan: 'PNS',
        pangkat: 'IIId', jabatan: 'Fungsional Ahli Muda', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Jumadil', password: 'Jumadil', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u8', nip: '198602072019031003', nama: 'Idaman Iman Selamat Zebua', golongan: 'PNS',
        pangkat: 'IIIb', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Iman', password: 'Iman', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u9', nip: '198203202009102001', nama: 'Devi Ayu Marini', golongan: 'PNS',
        pangkat: 'IIIb', jabatan: 'Pelaksana', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Devi', password: 'Devi', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u10', nip: '198309232005011002', nama: 'Handra Nolva Maas', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Handra', password: 'Handra', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u11', nip: '198501212009101003', nama: 'Hidayatullah', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Dayat', password: 'Dayat', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u12', nip: '197502022008112001', nama: 'Ida Farida', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Farida', password: 'Farida', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u13', nip: '198207042009012002', nama: 'Susilawati', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Susilawati', password: 'Susilawati', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u14', nip: '199305302025061005', nama: 'Muhsyi Alim Ritonga', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Alim', password: 'Alim', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u15', nip: '199811202025061002', nama: 'Muhammad Cahya Bhakty', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Cahya', password: 'Cahya', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u16', nip: '200110102025062014', nama: 'Zhafirah Aqilah Saufika', golongan: 'PNS',
        pangkat: 'IIIa', jabatan: 'Fungsional Ahli Pertama', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Zhafirah', password: 'Zhafirah', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u17', nip: '199008132024211017', nama: 'Andri Gusnadi', golongan: 'PNS',
        pangkat: 'IX', jabatan: 'Pranata Komputer', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Andri', password: 'Andri', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u18', nip: '198903212025211018', nama: 'Muhammad Pajri', golongan: 'PNS',
        pangkat: 'IX', jabatan: 'Penata Kelola Pemilu', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Pajri', password: 'Pajri', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u19', nip: '199510202025211006', nama: 'Muhammad Sandiko Putra', golongan: 'PNS',
        pangkat: 'IX', jabatan: 'Penata Kelola Pemilu', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Sandiko', password: 'Sandiko', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u20', nip: '198208012025211025', nama: 'Holid', golongan: 'PNS',
        pangkat: 'V', jabatan: 'Pengadministrasi Perkantoran', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Holid', password: 'Holid', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u21', nip: '198812292025212012', nama: 'Nila Marleti', golongan: 'PNS',
        pangkat: 'V', jabatan: 'Pengadministrasi Perkantoran', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Nila', password: 'Nila', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u22', nip: '198811252025211017', nama: 'Rivo Hardino', golongan: 'PNS',
        pangkat: 'V', jabatan: 'Pengadministrasi Perkantoran', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Rivo', password: 'Rivo', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u23', nip: '198608262025212018', nama: 'Mariyah.Z', golongan: 'PNS',
        pangkat: 'V', jabatan: 'Operator Layanan Operasional', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Mariyah', password: 'Mariyah', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u24', nip: '199610102025211022', nama: 'Manto', golongan: 'PNS',
        pangkat: 'V', jabatan: 'Operator Layanan Operasional', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Manto', password: 'Manto', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      },
      {
        id: 'u25', nip: '199104102024211018', nama: 'Dede Riky Satrya', golongan: 'PNS',
        pangkat: 'IX', jabatan: 'Penata Kelola Pemilu', unit: 'KPU Kab. Sarolangun',
        email: '', hp: '',
        username: 'Dede Riky Satrya', password: 'Dede Riky Satrya', role: 'pegawai', status: 'Aktif',
        avatar: 'https://ui-avatars.com/api/?name=Sri+Tutut&background=e03131&color=fff&size=80'
      }
    ];
    DB.set('users', users);

    // Seed some attendance data for the current month
    const absensi = [];
    const now = new Date();
    for (let i = 1; i <= now.getDate() - 1; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), i);
      if (d.getDay() === 0 || d.getDay() === 6) continue;
      const dateStr = formatDate(d);
      ['u2', 'u3', 'u4'].forEach(uid => {
        absensi.push({
          id: `abs_${uid}_${dateStr}`,
          userId: uid,
          tanggal: dateStr,
          masuk: `07:${Math.floor(Math.random() * 30 + 30).toString().padStart(2, '0')}`,
          istirahat: `12:00`,
          kembali: `13:0${Math.floor(Math.random() * 5)}`,
          pulang: `16:${Math.floor(Math.random() * 30 + 30).toString().padStart(2, '0')}`,
          status: 'Hadir',
          catatan: '',
          lat: -2.9761 + (Math.random() - .5) * .01,
          lon: 104.7754 + (Math.random() - .5) * .01
        });
      });
    }
    DB.set('absensi', absensi);
    DB.set('initialized', true);
  }
}

// ===== STATE =====
let currentUser = null;
let gpsLat = null;
let gpsLon = null;

// ===== UTILITIES =====
function formatDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function formatDateID(d) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const dt = typeof d === 'string' ? new Date(d) : d;
  return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`;
}
function getDayID(d) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  return days[d.getDay()];
}
function todayStr() { return formatDate(new Date()); }
function nowTime() {
  const n = new Date();
  return `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`;
}
function calcDurasi(masuk, pulang) {
  if (!masuk || !pulang) return '-';
  const [mh, mm] = masuk.split(':').map(Number);
  const [ph, pm] = pulang.split(':').map(Number);
  const diff = (ph * 60 + pm) - (mh * 60 + mm);
  if (diff < 0) return '-';
  return `${Math.floor(diff / 60)}j ${diff % 60}m`;
}
function showToast(msg, dur = 2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), dur);
}
function showMsg(el, msg, type) {
  el.textContent = msg;
  el.className = `absen-msg ${type}`;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 3500);
}
function statusBadge(s) {
  const map = { Hadir: 'green', Alpha: 'red', Izin: 'blue', Cuti: 'orange', Terlambat: 'orange' };
  return `<span class="badge badge-${map[s] || 'gray'}">${s}</span>`;
}

// ===== LIVE CLOCK =====
function startClock() {
  function tick() {
    const n = new Date();
    const hms = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}:${String(n.getSeconds()).padStart(2, '0')}`;
    document.getElementById('live-clock').textContent = hms;
    document.getElementById('live-date').textContent = formatDateID(n);
    document.getElementById('w-date').textContent = formatDateID(n);
    document.getElementById('w-day').textContent = getDayID(n);
  }
  tick();
  setInterval(tick, 1000);
}

// ===== LOGIN =====
function doLogin() {
  const nip = document.getElementById('login-nip').value.trim();
  const pw = document.getElementById('login-pw').value;
  const users = DB.get('users') || [];
  const user = users.find(u => (u.username === nip || u.nip === nip) && u.password === pw && u.status === 'Aktif');
  if (!user) {
    document.getElementById('login-error').classList.remove('hidden');
    return;
  }
  currentUser = user;
  DB.set('session', user.id);
  document.getElementById('login-error').classList.add('hidden');
  enterApp();
}
function togglePw() {
  const inp = document.getElementById('login-pw');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}
document.getElementById('login-pw').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
document.getElementById('login-nip').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

// ===== SESSION =====
function checkSession() {
  const sid = DB.get('session');
  if (sid) {
    const users = DB.get('users') || [];
    const user = users.find(u => u.id === sid);
    if (user) { currentUser = user; enterApp(); return; }
  }
  document.getElementById('page-login').classList.add('active');
}
function enterApp() {
  document.getElementById('page-login').classList.remove('active');
  document.getElementById('page-login').classList.add('hidden');
  document.getElementById('page-app').classList.remove('hidden');
  document.getElementById('page-app').style.display = 'flex';

  // Apply role-based theme to body
  document.body.setAttribute('data-role', currentUser.role);

  if (currentUser.role === 'admin') {
    // Admin: dark navy sidebar + gold accent
    document.documentElement.style.setProperty('--blue', '#1a237e');
    document.documentElement.style.setProperty('--blue-light', '#283593');
    document.documentElement.style.setProperty('--blue-dark', '#0d1457');
    document.documentElement.style.setProperty('--accent', '#f9a825');
    document.documentElement.style.setProperty('--bg', '#eef0f8');
    document.getElementById('nav-pegawai').style.display = '';
    document.getElementById('admin-panel').style.display = '';
    // Admin topbar badge
    const badge = document.getElementById('role-badge');
    if (badge) { badge.textContent = '⚙ ADMINISTRATOR'; badge.className = 'role-badge admin'; }
    // Show admin-only nav items
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = '');
    document.querySelectorAll('.pegawai-only').forEach(el => el.style.display = 'none');
  } else {
    // Pegawai: bright blue + teal accent
    document.documentElement.style.setProperty('--blue', '#0277bd');
    document.documentElement.style.setProperty('--blue-light', '#0288d1');
    document.documentElement.style.setProperty('--blue-dark', '#01579b');
    document.documentElement.style.setProperty('--accent', '#00bcd4');
    document.documentElement.style.setProperty('--bg', '#f0f7ff');
    document.getElementById('nav-pegawai').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'none';
    const badge = document.getElementById('role-badge');
    if (badge) { badge.textContent = '👤 PEGAWAI'; badge.className = 'role-badge pegawai'; }
    document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.pegawai-only').forEach(el => el.style.display = '');
  }

  loadUserUI();
  showSection('beranda');
  startClock();
  getGPS();
}
function doLogout() {
  DB.del('session');
  currentUser = null;
  document.getElementById('page-app').style.display = 'none';
  document.getElementById('page-login').classList.remove('hidden');
  document.getElementById('page-login').classList.add('active');
  document.getElementById('login-nip').value = '';
  document.getElementById('login-pw').value = '';
}
function loadUserUI() {
  const u = currentUser;
  document.getElementById('sidebar-name').textContent = u.nama.split(' ')[0];
  document.getElementById('sidebar-role').textContent = u.jabatan;
  document.getElementById('sidebar-avatar').src = u.avatar;
  document.getElementById('welcome-name').textContent = u.nama;
  document.getElementById('welcome-unit').textContent = `• ${u.jabatan} | ${u.unit}`;
  document.getElementById('profil-name').textContent = u.nama;
  document.getElementById('profil-role').textContent = u.jabatan;
  document.getElementById('profil-avatar').src = u.avatar;
  document.getElementById('p-nip').textContent = u.nip;
  document.getElementById('p-gol').textContent = u.golongan + (u.pangkat ? ` (${u.pangkat})` : '');
  document.getElementById('p-jabatan').textContent = u.jabatan;
  document.getElementById('p-unit').textContent = u.unit;
  document.getElementById('p-email').textContent = u.email;
  loadBerandaStats();
}

// ===== NAVIGATION =====
const sectionTitles = {
  beranda: 'Beranda', absensi: 'Absensi Kehadiran',
  pegawai: 'Data Pegawai', laporan: 'Laporan Presensi', profil: 'Profil Saya'
};
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => {
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(name)) b.classList.add('active');
  });
  document.getElementById('topbar-title').textContent = sectionTitles[name] || name;
  if (name === 'absensi') loadAbsensiPage();
  if (name === 'pegawai' && currentUser.role === 'admin') { renderPegawai(); populateUnitFilter(); }
  if (name === 'beranda') loadBerandaStats();
  if (name === 'laporan') initLaporan();
  // Close sidebar on mobile
  if (window.innerWidth < 640) document.getElementById('sidebar').classList.remove('open');
}
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (window.innerWidth < 640) {
    sb.classList.toggle('open');
  } else {
    sb.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('expanded');
  }
}

// ===== GPS =====
function getGPS() {
  if (!navigator.geolocation) {
    document.getElementById('gps-status').textContent = 'Tidak Didukung';
    document.getElementById('gps-addr').textContent = 'GPS tidak tersedia di browser ini';
    return;
  }
  document.getElementById('gps-status').textContent = 'Mendeteksi...';
  navigator.geolocation.getCurrentPosition(pos => {
    gpsLat = pos.coords.latitude;
    gpsLon = pos.coords.longitude;
    document.getElementById('gps-lat').textContent = `Latitude: ${gpsLat.toFixed(6)}`;
    document.getElementById('gps-lon').textContent = `Longitude: ${gpsLon.toFixed(6)}`;
    document.getElementById('gps-acc').textContent = `Akurasi: ±${Math.round(pos.coords.accuracy)} meter`;
    document.getElementById('gps-status').textContent = 'Terdeteksi ✓';
    document.getElementById('gps-status').className = 'badge badge-green';
    // Reverse geocode using nominatim
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${gpsLat}&lon=${gpsLon}&format=json`)
      .then(r => r.json()).then(d => {
        document.getElementById('gps-addr').textContent = `Alamat: ${d.display_name}`;
      }).catch(() => {
        document.getElementById('gps-addr').textContent = `Alamat: ${gpsLat.toFixed(4)}, ${gpsLon.toFixed(4)}`;
      });
  }, err => {
    document.getElementById('gps-status').textContent = 'Gagal';
    document.getElementById('gps-status').className = 'badge badge-red';
    document.getElementById('gps-addr').textContent = 'Izinkan akses lokasi di browser Anda';
  }, { enableHighAccuracy: true, timeout: 10000 });
}

// ===== ABSENSI =====
function getTodayAbsen() {
  const all = DB.get('absensi') || [];
  return all.find(a => a.userId === currentUser.id && a.tanggal === todayStr()) || null;
}
function loadAbsensiPage() {
  const ab = getTodayAbsen();
  const ids = ['masuk', 'istirahat', 'kembali', 'pulang'];
  const btnIds = ['btn-masuk', 'btn-istirahat', 'btn-kembali', 'btn-pulang'];
  ids.forEach(k => {
    const v = ab ? ab[k] : '--:--';
    document.getElementById('abs-' + k).textContent = v || '--:--';
  });
  // Button states
  if (!ab) {
    document.getElementById('btn-masuk').disabled = false;
    document.getElementById('btn-istirahat').disabled = true;
    document.getElementById('btn-kembali').disabled = true;
    document.getElementById('btn-pulang').disabled = true;
  } else {
    document.getElementById('btn-masuk').disabled = true;
    document.getElementById('btn-istirahat').disabled = !!ab.istirahat;
    document.getElementById('btn-kembali').disabled = !ab.istirahat || !!ab.kembali;
    document.getElementById('btn-pulang').disabled = !ab.kembali || !!ab.pulang;
  }
  renderRiwayat();
}
function doAbsen(type) {
  const all = DB.get('absensi') || [];
  const now = nowTime();
  const catatan = document.getElementById('absen-catatan').value;
  let rec = all.find(a => a.userId === currentUser.id && a.tanggal === todayStr());
  if (!rec) {
    rec = {
      id: `abs_${currentUser.id}_${todayStr()}`,
      userId: currentUser.id, tanggal: todayStr(),
      masuk: null, istirahat: null, kembali: null, pulang: null,
      status: 'Hadir', catatan: '', lat: gpsLat, lon: gpsLon
    };
    all.push(rec);
  }
  rec[type] = now;
  if (catatan) rec.catatan = catatan;
  // Determine status
  if (rec.masuk) {
    const [h, m] = rec.masuk.split(':').map(Number);
    if (h > 8 || (h === 8 && m > 0)) rec.status = 'Terlambat';
    else rec.status = 'Hadir';
  }
  DB.set('absensi', all);
  const labels = { masuk: 'Masuk', istirahat: 'Istirahat', kembali: 'Kembali Kerja', pulang: 'Pulang' };
  showMsg(document.getElementById('absen-msg'), `✅ Absen ${labels[type]} berhasil: ${now}`, 'success');
  showToast(`Absen ${labels[type]} pukul ${now}`);
  loadAbsensiPage();
  loadBerandaStats();
}
function renderRiwayat() {
  const all = DB.get('absensi') || [];
  const now = new Date();
  const myAbs = all.filter(a => a.userId === currentUser.id &&
    a.tanggal.startsWith(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`))
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  const tb = document.getElementById('riwayat-body');
  if (!myAbs.length) { tb.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:2rem">Belum ada data absensi bulan ini</td></tr>'; return; }
  tb.innerHTML = myAbs.map(a => `
    <tr>
      <td>${formatDateID(a.tanggal)}</td>
      <td><b>${a.masuk || '-'}</b></td>
      <td>${a.istirahat || '-'}</td>
      <td>${a.kembali || '-'}</td>
      <td><b>${a.pulang || '-'}</b></td>
      <td>${statusBadge(a.status)}</td>
    </tr>
  `).join('');
}

// ===== BERANDA STATS =====
function loadBerandaStats() {
  const ab = getTodayAbsen();
  ['masuk', 'istirahat', 'kembali', 'pulang'].forEach(k => {
    document.getElementById('dash-' + k).textContent = (ab && ab[k]) ? ab[k] : '--:--';
  });
  const badge = document.getElementById('today-status-badge');
  if (ab) {
    badge.textContent = ab.status;
    badge.className = 'badge badge-' + (ab.status === 'Hadir' ? 'green' : ab.status === 'Terlambat' ? 'orange' : 'gray');
  } else {
    badge.textContent = 'Belum Absen'; badge.className = 'badge badge-gray';
  }
  // Monthly stats
  const all = DB.get('absensi') || [];
  const now = new Date();
  const myAll = all.filter(a => a.userId === currentUser.id &&
    a.tanggal.startsWith(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`));
  const hadir = myAll.filter(a => a.status === 'Hadir' || a.status === 'Terlambat').length;
  const alpha = 0; // Simplified
  const cuti = myAll.filter(a => a.status === 'Cuti').length;
  const izin = myAll.filter(a => a.status === 'Izin').length;
  document.getElementById('stat-hadir').textContent = hadir;
  document.getElementById('stat-alpha').textContent = alpha;
  document.getElementById('stat-cuti').textContent = cuti;
  document.getElementById('stat-izin').textContent = izin;
}

// ===== DATA PEGAWAI (admin) =====
function renderPegawai() {
  const users = DB.get('users') || [];
  const search = document.getElementById('search-pegawai').value.toLowerCase();
  const gol = document.getElementById('filter-golongan').value;
  const unit = document.getElementById('filter-unit').value;
  const filtered = users.filter(u =>
    (!search || u.nama.toLowerCase().includes(search) || u.nip.includes(search)) &&
    (!gol || u.golongan === gol) &&
    (!unit || u.unit === unit)
  );
  const tb = document.getElementById('pegawai-body');
  if (!filtered.length) { tb.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:2rem">Data tidak ditemukan</td></tr>'; return; }
  tb.innerHTML = filtered.map((u, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><code style="font-size:.78rem">${u.nip}</code></td>
      <td><b>${u.nama}</b></td>
      <td><span class="badge badge-${u.golongan === 'PNS' ? 'blue' : 'orange'}">${u.golongan}</span>${u.pangkat ? ` <small>(${u.pangkat})</small>` : ''}</td>
      <td>${u.jabatan}</td>
      <td>${u.unit}</td>
      <td><span class="badge badge-${u.status === 'Aktif' ? 'green' : 'red'}">${u.status}</span></td>
      <td>
        <button class="btn-outline" style="padding:.3rem .7rem;font-size:.78rem" onclick="editPegawai('${u.id}')">✏️ Edit</button>
        <button onclick="hapusPegawai('${u.id}')" style="background:#ffebee;color:#c62828;border:none;border-radius:6px;padding:.3rem .7rem;font-size:.78rem;cursor:pointer;margin-left:.25rem">🗑</button>
      </td>
    </tr>
  `).join('');
}
function populateUnitFilter() {
  const users = DB.get('users') || [];
  const units = [...new Set(users.map(u => u.unit))];
  const sel = document.getElementById('filter-unit');
  const cur = sel.value;
  sel.innerHTML = '<option value="">Semua Unit</option>' + units.map(u => `<option value="${u}">${u}</option>`).join('');
  sel.value = cur;
  // Laporan filter
  const lapSel = document.getElementById('lap-pegawai-filter');
  lapSel.innerHTML = '<option value="">Semua Pegawai</option>' + users.map(u => `<option value="${u.id}">${u.nama}</option>`).join('');
}
function openModalPegawai() {
  document.getElementById('pegawai-id').value = '';
  document.getElementById('modal-pegawai-title').textContent = 'Tambah Pegawai';
  ['nip','nama','jabatan','unit','email','hp','username'].forEach(f => document.getElementById('f-' + f).value = '');
  document.getElementById('f-password').value = '';
  document.getElementById('f-golongan').value = 'PNS';
  document.getElementById('f-pangkat').value = '';
  document.getElementById('f-status').value = 'Aktif';
  document.getElementById('f-role').value = 'pegawai';
  document.getElementById('modal-pegawai').classList.remove('hidden');
}
function editPegawai(id) {
  const users = DB.get('users') || [];
  const u = users.find(x => x.id === id);
  if (!u) return;
  document.getElementById('pegawai-id').value = u.id;
  document.getElementById('modal-pegawai-title').textContent = 'Edit Pegawai';
  document.getElementById('f-nip').value = u.nip;
  document.getElementById('f-nama').value = u.nama;
  document.getElementById('f-golongan').value = u.golongan;
  document.getElementById('f-pangkat').value = u.pangkat || '';
  document.getElementById('f-jabatan').value = u.jabatan;
  document.getElementById('f-unit').value = u.unit;
  document.getElementById('f-email').value = u.email;
  document.getElementById('f-hp').value = u.hp;
  document.getElementById('f-username').value = u.username;
  document.getElementById('f-password').value = '';
  document.getElementById('f-status').value = u.status;
  document.getElementById('f-role').value = u.role;
  document.getElementById('modal-pegawai').classList.remove('hidden');
}
function closeModalPegawai() { document.getElementById('modal-pegawai').classList.add('hidden'); }
function savePegawai() {
  const nip = document.getElementById('f-nip').value.trim();
  const nama = document.getElementById('f-nama').value.trim();
  if (!nip || !nama) { showToast('⚠️ NIP dan Nama wajib diisi'); return; }
  const users = DB.get('users') || [];
  const editId = document.getElementById('pegawai-id').value;
  const newPw = document.getElementById('f-password').value;
  if (editId) {
    const idx = users.findIndex(u => u.id === editId);
    if (idx >= 0) {
      users[idx] = { ...users[idx],
        nip, nama,
        golongan: document.getElementById('f-golongan').value,
        pangkat: document.getElementById('f-pangkat').value,
        jabatan: document.getElementById('f-jabatan').value,
        unit: document.getElementById('f-unit').value,
        email: document.getElementById('f-email').value,
        hp: document.getElementById('f-hp').value,
        username: document.getElementById('f-username').value,
        status: document.getElementById('f-status').value,
        role: document.getElementById('f-role').value,
        ...(newPw ? { password: newPw } : {})
      };
    }
    showToast('✅ Data pegawai berhasil diperbarui');
  } else {
    const newUser = {
      id: 'u' + Date.now(), nip, nama,
      golongan: document.getElementById('f-golongan').value,
      pangkat: document.getElementById('f-pangkat').value,
      jabatan: document.getElementById('f-jabatan').value,
      unit: document.getElementById('f-unit').value,
      email: document.getElementById('f-email').value,
      hp: document.getElementById('f-hp').value,
      username: document.getElementById('f-username').value,
      password: newPw || 'pegawai123',
      status: document.getElementById('f-status').value,
      role: document.getElementById('f-role').value,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=3b5bdb&color=fff&size=80`
    };
    users.push(newUser);
    showToast('✅ Pegawai baru berhasil ditambahkan');
  }
  DB.set('users', users);
  closeModalPegawai();
  renderPegawai();
  populateUnitFilter();
}
function hapusPegawai(id) {
  if (id === 'u1') { showToast('❌ Tidak bisa menghapus akun administrator'); return; }
  if (!confirm('Yakin ingin menghapus pegawai ini?')) return;
  const users = (DB.get('users') || []).filter(u => u.id !== id);
  DB.set('users', users);
  renderPegawai();
  showToast('🗑 Pegawai berhasil dihapus');
}

// ===== LAPORAN =====
function initLaporan() {
  const now = new Date();
  document.getElementById('lap-bulan').value = now.getMonth() + 1;
  const ySel = document.getElementById('lap-tahun');
  ySel.innerHTML = '';
  for (let y = now.getFullYear(); y >= now.getFullYear() - 3; y--) {
    ySel.innerHTML += `<option value="${y}">${y}</option>`;
  }
  populateUnitFilter();
}
function gpsCell(lat, lon) {
  if (!lat || !lon) return '<span style="color:var(--text-muted);font-size:.78rem">—</span>';
  const latF = parseFloat(lat).toFixed(6);
  const lonF = parseFloat(lon).toFixed(6);
  const mapsUrl = `https://www.google.com/maps?q=${latF},${lonF}`;
  return `<a href="${mapsUrl}" target="_blank" class="gps-coord-link" title="Buka di Google Maps">
    <span class="gps-dot">📍</span>
    <span class="gps-num">${latF}</span><br>
    <span class="gps-num">${lonF}</span>
  </a>`;
}

function generateLaporan() {
  const bulan = parseInt(document.getElementById('lap-bulan').value);
  const tahun = parseInt(document.getElementById('lap-tahun').value);
  const pegawaiId = document.getElementById('lap-pegawai-filter').value;
  const isAdmin = currentUser.role === 'admin';
  const bulanNames = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const prefix = `${tahun}-${String(bulan).padStart(2, '0')}`;
  const all = DB.get('absensi') || [];
  const users = DB.get('users') || [];

  let data = all.filter(a => a.tanggal.startsWith(prefix));
  // Pegawai biasa hanya lihat data diri sendiri
  if (!isAdmin) {
    data = data.filter(a => a.userId === currentUser.id);
  } else if (pegawaiId) {
    data = data.filter(a => a.userId === pegawaiId);
  }
  data.sort((a, b) => a.tanggal.localeCompare(b.tanggal) || a.userId.localeCompare(b.userId));

  const titleEl = document.getElementById('lap-title');
  titleEl.textContent = isAdmin
    ? `Laporan Presensi – ${bulanNames[bulan-1]} ${tahun}`
    : `Presensi Saya – ${bulanNames[bulan-1]} ${tahun}`;

  const hadirCount = data.filter(a => a.status === 'Hadir' || a.status === 'Terlambat').length;
  document.getElementById('lap-stats').innerHTML = `
    <div class="stat-card blue"><div class="stat-icon">📋</div><div class="stat-val">${data.length}</div><div class="stat-lbl">Total Record</div></div>
    <div class="stat-card green"><div class="stat-icon">✅</div><div class="stat-val">${hadirCount}</div><div class="stat-lbl">Hadir</div></div>
    <div class="stat-card orange"><div class="stat-icon">⏰</div><div class="stat-val">${data.filter(a=>a.status==='Terlambat').length}</div><div class="stat-lbl">Terlambat</div></div>
    <div class="stat-card red"><div class="stat-icon">❌</div><div class="stat-val">${data.filter(a=>a.status==='Alpha').length}</div><div class="stat-lbl">Alpha</div></div>
  `;

  // Update table header based on role
  const thead = document.getElementById('laporan-thead');
  if (isAdmin) {
    thead.innerHTML = `<tr>
      <th>No</th><th>Nama</th><th>Gol.</th><th>Tanggal</th>
      <th>Masuk</th><th>Istirahat</th><th>Kembali</th><th>Pulang</th>
      <th>Durasi</th><th>Koordinat GPS</th><th>Status</th>
    </tr>`;
  } else {
    thead.innerHTML = `<tr>
      <th>No</th><th>Tanggal</th>
      <th>Masuk</th><th>Istirahat</th><th>Kembali</th><th>Pulang</th>
      <th>Durasi</th><th>Koordinat GPS</th><th>Status</th><th>Catatan</th>
    </tr>`;
  }

  const tb = document.getElementById('laporan-body');
  const colspan = isAdmin ? 11 : 10;
  if (!data.length) {
    tb.innerHTML = `<tr><td colspan="${colspan}" style="text-align:center;padding:2rem;color:var(--text-muted)">Tidak ada data untuk periode ini</td></tr>`;
  } else {
    tb.innerHTML = data.map((a, i) => {
      const user = users.find(u => u.id === a.userId) || {};
      if (isAdmin) {
        return `<tr>
          <td>${i + 1}</td>
          <td><b>${user.nama || '-'}</b></td>
          <td><span class="badge badge-${user.golongan === 'PNS' ? 'blue' : 'orange'}">${user.golongan || '-'}</span></td>
          <td>${formatDateID(a.tanggal)}</td>
          <td class="td-time">${a.masuk || '—'}</td>
          <td class="td-time">${a.istirahat || '—'}</td>
          <td class="td-time">${a.kembali || '—'}</td>
          <td class="td-time">${a.pulang || '—'}</td>
          <td><span class="durasi-chip">${calcDurasi(a.masuk, a.pulang)}</span></td>
          <td>${gpsCell(a.lat, a.lon)}</td>
          <td>${statusBadge(a.status)}</td>
        </tr>`;
      } else {
        return `<tr>
          <td>${i + 1}</td>
          <td>${formatDateID(a.tanggal)}</td>
          <td class="td-time">${a.masuk || '—'}</td>
          <td class="td-time">${a.istirahat || '—'}</td>
          <td class="td-time">${a.kembali || '—'}</td>
          <td class="td-time">${a.pulang || '—'}</td>
          <td><span class="durasi-chip">${calcDurasi(a.masuk, a.pulang)}</span></td>
          <td>${gpsCell(a.lat, a.lon)}</td>
          <td>${statusBadge(a.status)}</td>
          <td style="font-size:.8rem;color:var(--text-muted)">${a.catatan || '—'}</td>
        </tr>`;
      }
    }).join('');
  }
  document.getElementById('laporan-result').style.display = '';
  window._laporanData = data;
  window._laporanUsers = users;
}

// ===== EXPORT CSV =====
function exportCSV() {
  if (!window._laporanData) { showToast('⚠️ Generate laporan dulu'); return; }
  const users = window._laporanUsers;
  const rows = [['No','NIP','Nama','Golongan','Pangkat','Tanggal','Jam Masuk','Istirahat','Kembali','Jam Pulang','Durasi','Latitude','Longitude','Status','Catatan']];
  window._laporanData.forEach((a, i) => {
    const u = users.find(x => x.id === a.userId) || {};
    rows.push([i + 1, u.nip || '', u.nama || '', u.golongan || '', u.pangkat || '',
      formatDateID(a.tanggal), a.masuk || '', a.istirahat || '', a.kembali || '', a.pulang || '',
      calcDurasi(a.masuk, a.pulang),
      a.lat ? parseFloat(a.lat).toFixed(6) : '',
      a.lon ? parseFloat(a.lon).toFixed(6) : '',
      a.status, a.catatan || '']);
  });
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Laporan_Absensi_SIAP.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 CSV berhasil diunduh');
}

// ===== GOOGLE DRIVE =====
function sendToGoogleDrive() {
  if (!window._laporanData) { showToast('⚠️ Generate laporan dulu'); return; }
  document.getElementById('modal-gdrive').classList.remove('hidden');
}
function closeGDrive() { document.getElementById('modal-gdrive').classList.add('hidden'); }
function kirimGDrive() {
  const url = document.getElementById('gdrive-url').value.trim();
  const filename = document.getElementById('gdrive-filename').value.trim() || 'Laporan_Absensi.csv';
  if (!url) { showToast('⚠️ Masukkan URL Google Apps Script'); return; }
  // Build CSV
  const users = window._laporanUsers;
  const rows = [['No','NIP','Nama','Golongan','Pangkat','Tanggal','Jam Masuk','Istirahat','Kembali','Jam Pulang','Durasi','Status','Catatan']];
  window._laporanData.forEach((a, i) => {
    const u = users.find(x => x.id === a.userId) || {};
    rows.push([i + 1, u.nip || '', u.nama || '', u.golongan || '', u.pangkat || '',
      formatDateID(a.tanggal), a.masuk || '', a.istirahat || '', a.kembali || '', a.pulang || '',
      calcDurasi(a.masuk, a.pulang), a.status, a.catatan || '']);
  });
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const payload = { filename, content: csv, mimeType: 'text/csv' };
  showToast('📤 Mengirim ke Google Drive...');
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'text/plain' }
  }).then(r => r.text()).then(res => {
    closeGDrive();
    showToast('✅ Berhasil dikirim ke Google Drive!');
  }).catch(err => {
    showToast('❌ Gagal kirim. Periksa URL dan coba lagi.');
  });
}

// ===== SHOW ALL ABSENSI (admin) =====
function showAllAbsensi() {
  const panel = document.getElementById('all-absensi-panel');
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) {
    const all = DB.get('absensi') || [];
    const users = DB.get('users') || [];
    const recent = all.slice().sort((a, b) => b.tanggal.localeCompare(a.tanggal)).slice(0, 50);
    const tb = document.getElementById('all-absensi-body');
    tb.innerHTML = recent.map(a => {
      const u = users.find(x => x.id === a.userId) || {};
      return `<tr>
        <td><b>${u.nama || '-'}</b></td>
        <td>${formatDateID(a.tanggal)}</td>
        <td>${a.masuk || '-'}</td><td>${a.istirahat || '-'}</td>
        <td>${a.kembali || '-'}</td><td>${a.pulang || '-'}</td>
        <td>${statusBadge(a.status)}</td>
      </tr>`;
    }).join('');
  }
}

// ===== GANTI PASSWORD =====
function gantiPassword() {
  const lama = document.getElementById('pw-lama').value;
  const baru = document.getElementById('pw-baru').value;
  const konfirm = document.getElementById('pw-konfirm').value;
  const msg = document.getElementById('pw-msg');
  if (lama !== currentUser.password) { showMsg(msg, '❌ Password lama salah', 'error'); return; }
  if (baru.length < 6) { showMsg(msg, '❌ Password baru minimal 4 karakter', 'error'); return; }
  if (baru !== konfirm) { showMsg(msg, '❌ Konfirmasi password tidak cocok', 'error'); return; }
  const users = DB.get('users') || [];
  const idx = users.findIndex(u => u.id === currentUser.id);
  if (idx >= 0) { users[idx].password = baru; currentUser.password = baru; }
  DB.set('users', users);
  showMsg(msg, '✅ Password berhasil diubah', 'success');
  document.getElementById('pw-lama').value = '';
  document.getElementById('pw-baru').value = '';
  document.getElementById('pw-konfirm').value = '';
}

// ===== INIT =====
initDB();
checkSession();
