import { Course, Module, Quiz, KMSEntry } from '../types';

export const CATEGORIES = ['Semua', 'Operasional', 'Teknis', 'Supervisi'];

export const COURSES: Course[] = [
  {
    id: 'mos',
    title: 'Managerial Operational Skill (MOS)',
    instructor: 'Dep. Operasional',
    thumbnail: 'https://picsum.photos/seed/manager/800/450',
    price: 0,
    rating: 4.9,
    students: 120,
    duration: '40 jam',
    category: 'Operasional',
    description: 'Keterampilan manajerial tingkat lanjut untuk keunggulan operasional.',
    progress: 65,
  },
  {
    id: 'tos',
    title: 'Technical Operational Skill (TOS)',
    instructor: 'Tim Teknis',
    thumbnail: 'https://picsum.photos/seed/tech/800/450',
    price: 0,
    rating: 4.8,
    students: 350,
    duration: '30 jam',
    category: 'Teknis',
    description: 'Keterampilan teknis inti yang diperlukan untuk operasional harian.',
    progress: 100,
  },
  {
    id: 'sos',
    title: 'Supervisory Operational Skill (SOS)',
    instructor: 'Pelatihan HR',
    thumbnail: 'https://picsum.photos/seed/supervise/800/450',
    price: 0,
    rating: 4.7,
    students: 200,
    duration: '25 jam',
    category: 'Supervisi',
    description: 'Mengembangkan kapabilitas kepemimpinan dan supervisi.',
  },
  {
    id: 'stocker',
    title: 'Pelatihan Profesional Stocker',
    instructor: 'Tim Logistik',
    thumbnail: 'https://picsum.photos/seed/stock/800/450',
    price: 0,
    rating: 4.6,
    students: 500,
    duration: '15 jam',
    category: 'Operasional',
    description: 'Manajemen stok dan kontrol inventaris yang efisien.',
  },
];

export const KMS_DATA: KMSEntry[] = [
  {
    id: 'kms-1',
    title: 'Cara Membuat Es Gobak Sodor',
    content: `Es Gobak Sodor adalah minuman khas yang menyegarkan. Berikut adalah langkah-langkah pembuatannya:
    
1. Siapkan es serut halus sebagai dasar.
2. Tambahkan sirup merah (cocopandan) secukupnya.
3. Masukkan potongan buah tropis seperti nangka, kelapa muda, dan alpukat.
4. Tuangkan susu kental manis di atasnya.
5. Sajikan segera selagi dingin.

Tips: Gunakan es batu yang bersih dan buah yang segar untuk rasa maksimal.`,
    category: 'Minuman',
    author: 'Kepala Dapur',
    updatedAt: '2024-03-25'
  },
  {
    id: 'kms-2',
    title: 'Rahasia Es Teh Segar',
    content: `Es Teh yang sempurna membutuhkan teknik brewing yang tepat:
    
1. Gunakan daun teh berkualitas tinggi.
2. Seduh teh dengan air suhu 90 derajat Celsius selama 3-5 menit.
3. Jangan memeras kantong teh agar tidak sepat.
4. Tambahkan gula saat teh masih panas agar larut sempurna.
5. Dinginkan sebelum ditambahkan es batu.

Rahasia: Tambahkan sedikit perasan lemon untuk aroma yang lebih segar.`,
    category: 'Minuman',
    author: 'Pelatih Barista',
    updatedAt: '2024-03-24'
  },
  {
    id: 'kms-3',
    title: 'Standar Pembuatan Mie Gacoan',
    content: `Mie Gacoan memiliki standar rasa yang harus dijaga ketat:
    
1. Rebus mie selama tepat 2 menit dalam air mendidih.
2. Tiriskan mie hingga benar-benar kering.
3. Campurkan dengan bumbu rahasia Gacoan di mangkuk saji.
4. Tambahkan level pedas sesuai pesanan pelanggan.
5. Beri topping ayam cincang, pangsit goreng, dan bawang goreng.

Penting: Pastikan mie tidak lembek (al dente).`,
    category: 'Makanan',
    author: 'Manajer QC',
    updatedAt: '2024-03-23'
  }
];

export const LEARNING_STATS = {
  completed: 12,
  inProgress: 5,
  totalHours: 156,
  khs: [
    { subject: 'Modul MOS 1', grade: 'A', date: '2024-01-15' },
    { subject: 'Teknis TOS', grade: 'B+', date: '2024-02-10' },
    { subject: 'Pelatihan Keamanan', grade: 'A', date: '2024-03-05' },
  ]
};

export const QUIZZES: Quiz[] = [
  {
    id: 'q-mos',
    title: 'Kuis Modul MOS 1',
    questions: [
      {
        id: '1',
        question: 'Apa tujuan utama dari Managerial Operational Skill (MOS)?',
        options: ['Perbaikan teknis', 'Keunggulan operasional', 'Hanya layanan pelanggan', 'Penghitungan stok'],
        correctAnswer: 1
      }
    ]
  }
];

export const COURSE_MODULES: Record<string, Module[]> = {
  'mos': [
    {
      id: 'm1',
      title: 'Dasar-dasar Manajerial',
      lessons: [
        { id: 'l1', title: 'Pengenalan MOS', duration: '15:00', isCompleted: false, type: 'video', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
        { id: 'l2', title: 'Standar Operasional', duration: '20:00', isCompleted: false, type: 'reading', content: 'Standar operasional adalah tulang punggung bisnis kami...' },
        { id: 'l3', title: 'Kuis Modul 1', duration: '05:00', isCompleted: false, type: 'quiz', quizId: 'q-mos' },
      ],
    },
  ],
  'tos': [
    {
      id: 'm1',
      title: 'Keterampilan Teknis',
      lessons: [
        { id: 'l1', title: 'Pemeliharaan Peralatan', duration: '30:00', isCompleted: true, type: 'video', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      ],
    },
  ],
};
