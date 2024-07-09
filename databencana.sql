-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2024 at 08:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `databencana`
--

-- --------------------------------------------------------

--
-- Table structure for table `disasters`
--

CREATE TABLE `disasters` (
  `id` int(11) NOT NULL,
  `tanggal_bencana` date DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kota_kabupaten` varchar(255) DEFAULT NULL,
  `alamat_lokasi` varchar(255) DEFAULT NULL,
  `bencana_alam` varchar(255) DEFAULT NULL,
  `penjelasan_penyebab` text DEFAULT NULL,
  `korban_jiwa` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disasters`
--

INSERT INTO `disasters` (`id`, `tanggal_bencana`, `provinsi`, `kota_kabupaten`, `alamat_lokasi`, `bencana_alam`, `penjelasan_penyebab`, `korban_jiwa`, `createdAt`, `updatedAt`) VALUES
(1, '2023-05-15', 'Jawa Barat', 'Bandung', 'Jl. Setiabudi No.12', 'Gempa Bumi', 'Gempa bumi ini disebabkan oleh aktivitas tektonik, di mana lempeng-lempeng bumi bergerak dan menyebabkan getaran yang merusak di permukaan tanah.', 4, '0000-00-00 00:00:00', '2024-07-06 06:24:37'),
(2, '2023-12-20', 'Sumatera Utara', 'Medan', 'Jl. Gatot Subroto No.45', 'Banjir', 'Banjir ini disebabkan oleh hujan lebat yang berlangsung selama beberapa hari, menyebabkan sungai-sungai meluap dan merendam area permukiman.', 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '2022-11-10', 'Sulawesi Tengah', 'Palu', 'Jl. Ahmad Yani No.3', 'Tsunami', 'Tsunami ini dipicu oleh gempa bumi kuat yang terjadi di lepas pantai, menyebabkan gelombang besar yang menghantam pantai dan mengakibatkan kerusakan luas.', 150, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '2023-03-08', 'Kalimantan Selatan', 'Banjarmasin', 'Jl. A. Yani No.10', 'Banjir', 'Banjir ini terjadi akibat luapan sungai yang tidak mampu menampung volume air yang meningkat drastis setelah hujan deras terus-menerus.', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '2024-01-25', 'Bali', 'Denpasar', 'Jl. Diponegoro No.99', 'Letusan Gunung Berapi', 'Letusan gunung berapi ini disebabkan oleh peningkatan aktivitas vulkanik di dalam gunung, yang memaksa material magma meletus keluar ke permukaan.', 20, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, '2023-08-14', 'Jawa Timur', 'Surabaya', 'Jl. Raya Darmo No.23', 'Angin Puting Beliung', 'Angin puting beliung ini disebabkan oleh kondisi cuaca ekstrem yang membentuk pusaran angin dengan kecepatan tinggi, merusak bangunan dan lingkungan sekitarnya.', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, '2022-05-30', 'Aceh', 'Banda Aceh', 'Jl. Teuku Umar No.8', 'Gempa Bumi', 'Gempa bumi ini disebabkan oleh pergerakan lempeng tektonik yang menimbulkan getaran kuat di permukaan bumi, menyebabkan kerusakan dan korban jiwa.', 25, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, '2024-04-10', 'Papua', 'Jayapura', 'Jl. Raya Abepura No.15', 'Tanah Longsor', 'Tanah longsor ini terjadi akibat curah hujan yang tinggi dan terus-menerus, mengakibatkan tanah di lereng bukit menjadi jenuh air dan akhirnya longsor.', 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '2023-07-22', 'Maluku', 'Ambon', 'Jl. Sultan Hasanuddin No.20', 'Gempa Bumi', 'Gempa bumi ini disebabkan oleh pergerakan lempeng tektonik di bawah permukaan bumi, yang memicu getaran hebat dan merusak infrastruktur di daerah tersebut.', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '2022-09-15', 'Nusa Tenggara Barat', 'Mataram', 'Jl. Pejanggik No.56', 'Banjir', 'Banjir ini terjadi akibat hujan lebat yang mengguyur wilayah tersebut selama beberapa hari, menyebabkan genangan air yang meluas dan merusak rumah warga.', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, '2024-05-17', 'Jawa Tengah', 'Semarang', 'Jl. Pandanaran No.8', 'Banjir', 'Banjir terjadi akibat hujan lebat yang menyebabkan air sungai meluap dan membanjiri area pemukiman.', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, '2024-02-10', 'Lampung', 'Bandar Lampung', 'Jl. Raden Intan No.14', 'Gempa Bumi', 'Gempa bumi terjadi karena aktivitas tektonik yang mengakibatkan pergeseran lempeng bumi.', 15, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, '2023-11-28', 'Jambi', 'Jambi', 'Jl. Sultan Thaha No.3', 'Kebakaran Hutan', 'Kebakaran hutan disebabkan oleh cuaca panas yang berkepanjangan dan lahan kering.', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, '2023-07-19', 'Kalimantan Timur', 'Samarinda', 'Jl. Pahlawan No.5', 'Banjir', 'Banjir terjadi akibat luapan sungai setelah hujan deras yang berkepanjangan.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, '2024-03-05', 'Sumatera Selatan', 'Palembang', 'Jl. Jenderal Sudirman No.10', 'Gempa Bumi', 'Gempa bumi terjadi karena adanya pergerakan lempeng bumi yang menyebabkan getaran hebat.', 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, '2023-10-12', 'Sulawesi Selatan', 'Makassar', 'Jl. Urip Sumoharjo No.7', 'Angin Topan', 'Angin topan disebabkan oleh perubahan suhu di laut yang meningkatkan kecepatan angin secara tiba-tiba.', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, '2023-06-18', 'Banten', 'Serang', 'Jl. Veteran No.12', 'Banjir', 'Banjir terjadi karena luapan sungai akibat hujan deras yang melanda wilayah tersebut.', 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, '2024-01-10', 'Kalimantan Barat', 'Pontianak', 'Jl. Ahmad Yani No.9', 'Gempa Bumi', 'Gempa bumi disebabkan oleh adanya pergerakan lempeng bumi yang menimbulkan getaran hebat.', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, '2023-09-22', 'Maluku Utara', 'Ternate', 'Jl. Merdeka No.15', 'Tsunami', 'Tsunami disebabkan oleh gempa bumi yang terjadi di dasar laut dan menghasilkan gelombang besar yang menghantam pantai.', 13, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, '2022-12-05', 'Papua Barat', 'Sorong', 'Jl. Yos Sudarso No.23', 'Letusan Gunung Berapi', 'Letusan gunung berapi disebabkan oleh meningkatnya tekanan magma di dalam gunung yang akhirnya meletus.', 17, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, '2024-08-15', 'Jawa Barat', 'Bogor', 'Jl. Raya Puncak No.5', 'Tanah Longsor', 'Tanah longsor terjadi karena curah hujan yang tinggi sehingga menyebabkan lereng gunung labil dan akhirnya longsor.', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, '2023-04-20', 'Aceh', 'Lhokseumawe', 'Jl. Sudirman No.11', 'Kebakaran Hutan', 'Kebakaran hutan terjadi karena cuaca kering dan panas yang meningkatkan risiko api menjalar ke hutan.', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, '2024-02-12', 'Sulawesi Utara', 'Manado', 'Jl. Sam Ratulangi No.9', 'Gempa Bumi', 'Gempa bumi disebabkan oleh aktivitas tektonik di bawah laut yang menyebabkan getaran di permukaan bumi.', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, '2023-08-30', 'Bali', 'Badung', 'Jl. Sunset Road No.55', 'Tanah Longsor', 'Tanah longsor disebabkan oleh hujan deras yang membuat tanah di lereng gunung menjadi tidak stabil.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, '2022-10-10', 'Kalimantan Selatan', 'Banjarbaru', 'Jl. A. Yani No.8', 'Kekeringan', 'Kekeringan terjadi karena kurangnya hujan dalam waktu yang lama sehingga menyebabkan kekeringan di daerah tersebut.', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, '2024-05-18', 'Nusa Tenggara Timur', 'Kupang', 'Jl. El Tari No.12', 'Kebakaran Hutan', 'Kebakaran hutan disebabkan oleh aktivitas manusia yang tidak hati-hati dalam membakar lahan pertanian.', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, '2023-12-25', 'Sulawesi Tenggara', 'Kendari', 'Jl. Wolter Monginsidi No.15', 'Banjir', 'Banjir terjadi karena meluapnya sungai akibat curah hujan yang tinggi.', 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, '2023-05-07', 'Riau', 'Pekanbaru', 'Jl. Soekarno-Hatta No.10', 'Kebakaran Hutan', 'Kebakaran hutan terjadi karena aktivitas pembakaran lahan yang tidak terkontrol.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, '2022-11-18', 'Kepulauan Riau', 'Tanjung Pinang', 'Jl. DI Panjaitan No.8', 'Gempa Bumi', 'Gempa bumi disebabkan oleh aktivitas tektonik yang mengakibatkan pergeseran lempeng bumi.', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, '2024-03-12', 'Gorontalo', 'Gorontalo', 'Jl. Ahmad Yani No.7', 'Tanah Longsor', 'Tanah longsor terjadi akibat curah hujan yang tinggi sehingga menyebabkan lereng gunung menjadi tidak stabil.', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, '2024-04-18', 'Jawa Barat', 'Bekasi', 'Jl. Ahmad Yani No.10', 'Banjir', 'Banjir terjadi akibat meluapnya sungai setelah hujan deras yang berkepanjangan.', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, '2023-06-25', 'Sumatera Barat', 'Padang', 'Jl. Soekarno Hatta No.15', 'Gempa Bumi', 'Gempa bumi disebabkan oleh pergerakan lempeng tektonik di bawah permukaan bumi.', 18, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, '2023-11-05', 'Bangka Belitung', 'Pangkal Pinang', 'Jl. Jenderal Sudirman No.20', 'Banjir', 'Banjir terjadi akibat hujan deras yang menyebabkan sungai meluap.', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, '2024-01-20', 'Jawa Tengah', 'Yogyakarta', 'Jl. Malioboro No.5', 'Gempa Bumi', 'Gempa bumi disebabkan oleh aktivitas tektonik yang mengakibatkan pergeseran lempeng.', 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, '2023-09-12', 'Banten', 'Tangerang', 'Jl. Raya Serang No.10', 'Angin Puting Beliung', 'Angin puting beliung disebabkan oleh kondisi cuaca ekstrem yang membentuk pusaran angin.', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, '2024-05-25', 'Jawa Timur', 'Malang', 'Jl. Letjen S. Parman No.15', 'Letusan Gunung Berapi', 'Letusan gunung berapi disebabkan oleh peningkatan aktivitas vulkanik di dalam gunung.', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, '2023-08-18', 'Lampung', 'Metro', 'Jl. AH Nasution No.12', 'Banjir', 'Banjir terjadi karena hujan deras yang mengakibatkan sungai meluap.', 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, '2024-02-28', 'Sumatera Utara', 'Binjai', 'Jl. Jenderal Gatot Subroto No.8', 'Gempa Bumi', 'Gempa bumi disebabkan oleh pergerakan lempeng tektonik di bawah permukaan bumi.', 14, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, '2023-10-15', 'Bali', 'Gianyar', 'Jl. Raya Ubud No.7', 'Tanah Longsor', 'Tanah longsor terjadi akibat curah hujan yang tinggi sehingga menyebabkan lereng gunung menjadi tidak stabil.', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, '2024-06-05', 'Kalimantan Barat', 'Singkawang', 'Jl. Alianyang No.20', 'Banjir', 'Banjir terjadi akibat hujan deras yang menyebabkan sungai meluap.', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, '2023-07-22', 'Sulawesi Selatan', 'Parepare', 'Jl. Bau Massepe No.5', 'Gempa Bumi', 'Gempa bumi disebabkan oleh aktivitas tektonik yang mengakibatkan pergeseran lempeng.', 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, '2024-03-10', 'Kepulauan Riau', 'Batam', 'Jl. Raja Haji Fisabilillah No.10', 'Kebakaran Hutan', 'Kebakaran hutan disebabkan oleh aktivitas manusia yang tidak hati-hati dalam membakar lahan pertanian.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, '2023-05-20', 'Sumatera Barat', 'Bukittinggi', 'Jl. Ahmad Yani No.9', 'Banjir', 'Banjir terjadi akibat hujan deras yang menyebabkan sungai meluap.', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, '2024-01-15', 'Papua', 'Merauke', 'Jl. Brawijaya No.12', 'Gempa Bumi', 'Gempa bumi disebabkan oleh pergerakan lempeng tektonik di bawah permukaan bumi.', 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, '2023-09-25', 'Sulawesi Tengah', 'Poso', 'Jl. Trans Sulawesi No.8', 'Tanah Longsor', 'Tanah longsor terjadi akibat curah hujan yang tinggi sehingga menyebabkan lereng gunung menjadi tidak stabil.', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, '2024-04-05', 'Jawa Barat', 'Cirebon', 'Jl. Kartini No.10', 'Banjir', 'Banjir terjadi akibat meluapnya sungai setelah hujan deras yang berkepanjangan.', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, '2023-06-30', 'Sumatera Utara', 'Tebing Tinggi', 'Jl. Suprapto No.15', 'Gempa Bumi', 'Gempa bumi disebabkan oleh aktivitas tektonik yang mengakibatkan pergeseran lempeng.', 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, '2024-02-15', 'Nusa Tenggara Barat', 'Lombok', 'Jl. Pahlawan No.7', 'Tsunami', 'Tsunami disebabkan oleh gempa bumi yang terjadi di dasar laut dan menghasilkan gelombang besar yang menghantam pantai.', 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, '2023-11-10', 'Kalimantan Selatan', 'Martapura', 'Jl. Jenderal Sudirman No.12', 'Banjir', 'Banjir terjadi akibat hujan deras yang menyebabkan sungai meluap.', 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, '2024-07-11', 'asdadasd', 'adasdad', 'asdadadas', 'dadasdasd', 'asdasdadasd', 5, '2024-07-06 06:08:08', '2024-07-06 06:08:08'),
(52, '2024-07-03', 'makan ayanasda', 'asdadsa', 'dasdadasd', 'asdasdasd', 'adasdasd', 2, '2024-07-06 06:19:28', '2024-07-06 06:32:16'),
(53, '2024-07-01', 'adasda', 'dadad', 'asdasda', 'assdasdassd', 'asdasd', 3, '2024-07-06 06:21:29', '2024-07-06 06:21:29'),
(54, '2024-07-01', 'asdadadsa', 'sdadasd', 'dada', 'adada', 'asdasd', 6, '2024-07-06 06:21:47', '2024-07-06 06:21:47'),
(55, '2023-01-10', 'asdasda', 'dadasd', 'asdasdad', 'asdasda', 'dadasda', 4, '2024-07-06 06:24:52', '2024-07-06 06:24:52'),
(56, '2020-01-06', 'ppppppppppppp', 'ppppp', 'dawdadpppppa', 'dwadpa', 'dawdwad', 15, '2024-07-06 06:43:42', '2024-07-06 06:43:56'),
(57, '2024-07-03', 'asdasdad', 'adsasdad', 'adasd', 'sadasdad', 'asdadsa', 11, '2024-07-06 06:52:46', '2024-07-06 06:52:56');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240706042347-create-disaster.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `disasters`
--
ALTER TABLE `disasters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `disasters`
--
ALTER TABLE `disasters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
