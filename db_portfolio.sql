-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 09:31 AM
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
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_certificate`
--

CREATE TABLE `tbl_certificate` (
  `certificate_aid` int(11) NOT NULL,
  `certificate_image` varchar(50) NOT NULL,
  `certificate_title` varchar(50) NOT NULL,
  `certificate_is_active` tinyint(1) NOT NULL,
  `certificate_date_published` varchar(50) NOT NULL,
  `certificate_created` varchar(20) NOT NULL,
  `certificate_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_certificate`
--

INSERT INTO `tbl_certificate` (`certificate_aid`, `certificate_image`, `certificate_title`, `certificate_is_active`, `certificate_date_published`, `certificate_created`, `certificate_datetime`) VALUES
(1, 'sample', 'Certificate 1', 1, '2024-05-13 15:18:41', '2024-05-13 15:18:41', '2024-05-13 15:18:41');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_experience`
--

CREATE TABLE `tbl_experience` (
  `badge_aid` int(11) NOT NULL,
  `badge_image` varchar(50) NOT NULL,
  `badge_title` varchar(50) NOT NULL,
  `badge_active` tinyint(1) NOT NULL,
  `badge_date_published` varchar(20) NOT NULL,
  `badge_created` varchar(50) NOT NULL,
  `badge_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_works`
--

CREATE TABLE `tbl_works` (
  `works_aid` int(11) NOT NULL,
  `works_image` varchar(50) NOT NULL,
  `works_title` varchar(50) NOT NULL,
  `works_description` varchar(50) NOT NULL,
  `works_is_active` tinyint(1) NOT NULL,
  `works_date_published` varchar(20) NOT NULL,
  `works_works_created` varchar(50) NOT NULL,
  `works_works_datetime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_works`
--

INSERT INTO `tbl_works` (`works_aid`, `works_image`, `works_title`, `works_description`, `works_is_active`, `works_date_published`, `works_works_created`, `works_works_datetime`) VALUES
(2, 'sample', 'Work 1', 'jkhskjhfksjskfksjnk', 1, '2024-05-13 10:35:26', '', ''),
(3, 'sample', 'Work 1', 'jkhskjhfksjskfksjnk', 1, '2024-05-13 12:18:05', '', ''),
(4, 'sample', 'Work 1', 'jkhskjhfksjskfksjnk', 1, '2024-05-13 12:18:07', '', ''),
(5, 'sample', 'Work 1', 'jhsbjhbs', 1, '2024-05-13 12:56:59', '', ''),
(6, 'sample', 'Work 1', 'jhsbjhbs', 1, '2024-05-13 13:53:26', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_certificate`
--
ALTER TABLE `tbl_certificate`
  ADD PRIMARY KEY (`certificate_aid`);

--
-- Indexes for table `tbl_experience`
--
ALTER TABLE `tbl_experience`
  ADD PRIMARY KEY (`badge_aid`);

--
-- Indexes for table `tbl_works`
--
ALTER TABLE `tbl_works`
  ADD PRIMARY KEY (`works_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_certificate`
--
ALTER TABLE `tbl_certificate`
  MODIFY `certificate_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_experience`
--
ALTER TABLE `tbl_experience`
  MODIFY `badge_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_works`
--
ALTER TABLE `tbl_works`
  MODIFY `works_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
