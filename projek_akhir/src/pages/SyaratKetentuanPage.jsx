import {Container, Row, Col} from 'react-bootstrap'
import FaqComponent from '../components/FaqComponent'

const SyaratKetentuanPage = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className='fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Syarat & Ketentuan</h1>
            <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'> Harap membaca dengan seksama sebelum mengikuti kelas. Dengan membeli kelas, kamu dianggap telah menyetujui semua syarat dan ketentuan di bawah ini.</p>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col>
            <p>
              Kami berkomitmen untuk menyediakan layanan pembelajaran online terbaik dengan konten yang berkualitas dan mudah diakses. Dengan membeli kelas di platform ini, kamu menyetujui untuk menggunakan materi pembelajaran secara pribadi dan tidak membagikannya kepada pihak lain tanpa izin. Semua aktivitas dalam platform harus mematuhi ketentuan yang berlaku demi kenyamanan bersama.
            </p>
            </Col>
          </Row>
          <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>1. Ketentuan Umum</h4>
            <ol>
              <li>Dengan membeli dan mengikuti kelas, pengguna dianggap telah memahami dan menyetujui seluruh syarat dan ketentuan yang berlaku di platform ini.</li>
              <li>Platform ini menyediakan layanan kursus online dengan materi yang dapat diakses secara daring sesuai dengan jadwal dan ketentuan yang telah ditetapkan.</li>
              <li>Seluruh konten, materi, dan hak cipta sepenuhnya dimiliki oleh penyelenggara dan dilarang disalahgunakan oleh pengguna.</li>
            </ol>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>2. Pembayaran dan Akses</h4>
            <ol>
              <li>Pengguna diwajibkan melakukan pembayaran sesuai dengan harga kelas yang tertera untuk mendapatkan akses penuh ke materi pembelajaran.</li>
              <li>Setelah pembayaran berhasil, akses kelas akan diberikan dalam waktu maksimal 1x24 jam melalui akun pengguna yang terdaftar.</li>
              <li>Pembayaran yang telah dilakukan tidak dapat dikembalikan, kecuali dalam kondisi tertentu sesuai kebijakan pengembalian kami.</li>
            </ol>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>3. Penggantian Kelas</h4>
            <ol>
              <li>Pengguna dapat mengajukan penggantian kelas maksimal 1 kali dalam waktu 3 hari setelah pembelian, selama kelas belum diakses lebih dari 20%.</li>
              <li>Penggantian hanya berlaku untuk kelas dengan harga yang sama atau lebih rendah dari kelas yang sudah dibeli.</li>
              <li>Proses penggantian dapat dilakukan dengan menghubungi tim layanan pelanggan kami melalui kontak resmi yang tersedia.</li>
            </ol>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <h4 className='fw-bold'>4. Larangan Pengunduhan dan Distribusi</h4>
            <ol>
              <li>Seluruh materi dalam bentuk video hanya dapat diakses secara online dan tidak dapat diunduh oleh pengguna.</li>
              <li>Pengguna dilarang keras merekam, menyebarluaskan, atau memanfaatkan materi pembelajaran untuk kepentingan komersial tanpa izin tertulis dari penyelenggara.</li>
              <li>Setiap pelanggaran akan dikenakan sanksi sesuai ketentuan hukum yang berlaku serta pemblokiran akun secara permanen.</li>
            </ol>
          </Col>
        </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default SyaratKetentuanPage