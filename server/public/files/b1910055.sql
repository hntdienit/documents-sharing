-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 08:44 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b1910055`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Ninh Kiều, Cần Thơ', '2022-12-07 07:33:43', '2022-12-07 07:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `cartdetails`
--

CREATE TABLE `cartdetails` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `productDetailId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`, `parent`) VALUES
(1, 'table', '2022-12-07 06:37:22', '2022-12-07 06:37:22', NULL),
(2, 'chair', '2022-12-07 06:37:31', '2022-12-07 06:37:31', NULL),
(3, 'wood cabinets', '2022-12-07 06:38:01', '2022-12-07 06:38:01', NULL),
(4, 'iron shelf', '2022-12-07 06:38:22', '2022-12-07 06:38:22', NULL),
(5, 'lamp', '2022-12-07 06:38:53', '2022-12-07 06:38:53', NULL),
(6, 'Wall Lamp', '2022-12-07 06:39:11', '2022-12-07 06:39:11', NULL),
(7, 'Outdoor', '2022-12-07 06:39:25', '2022-12-07 06:39:41', NULL),
(8, 'Bowl', '2022-12-07 07:01:36', '2022-12-07 07:01:36', NULL),
(9, 'clock', '2022-12-07 07:13:50', '2022-12-07 07:13:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productDetailId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `createdAt`, `updatedAt`, `productDetailId`) VALUES
(1, 'http://localhost:3006/image/product/1670396410401-category-3.jpg', '2022-12-07 07:00:10', '2022-12-07 07:00:10', 1),
(2, 'http://localhost:3006/image/product/1670396410402-quick-view-3.jpg', '2022-12-07 07:00:10', '2022-12-07 07:00:10', 1),
(3, 'http://localhost:3006/image/product/1670396726842-product-15.jpg', '2022-12-07 07:05:26', '2022-12-07 07:05:26', 2),
(4, 'http://localhost:3006/image/product/1670396831783-product-5.jpg', '2022-12-07 07:07:11', '2022-12-07 07:07:11', 3),
(5, 'http://localhost:3006/image/product/1670396831784-product-11.jpg', '2022-12-07 07:07:11', '2022-12-07 07:07:11', 3),
(6, 'http://localhost:3006/image/product/1670396903197-category-1.jpg', '2022-12-07 07:08:23', '2022-12-07 07:08:23', 4),
(7, 'http://localhost:3006/image/product/1670396903197-category-3.jpg', '2022-12-07 07:08:23', '2022-12-07 07:08:23', 4),
(8, 'http://localhost:3006/image/product/1670396999546-category-1.jpg', '2022-12-07 07:09:59', '2022-12-07 07:09:59', 5),
(9, 'http://localhost:3006/image/product/1670396999546-category-3.jpg', '2022-12-07 07:09:59', '2022-12-07 07:09:59', 5),
(10, 'http://localhost:3006/image/product/1670397095198-product-6.jpg', '2022-12-07 07:11:35', '2022-12-07 07:11:35', 6),
(11, 'http://localhost:3006/image/product/1670397095198-sale-1.jpg', '2022-12-07 07:11:35', '2022-12-07 07:11:35', 6),
(12, 'http://localhost:3006/image/product/1670397206386-product-6.jpg', '2022-12-07 07:13:26', '2022-12-07 07:13:26', 7),
(13, 'http://localhost:3006/image/product/1670397206386-product-16.jpg', '2022-12-07 07:13:26', '2022-12-07 07:13:26', 7),
(14, 'http://localhost:3006/image/product/1670397304811-banner-2.jpg', '2022-12-07 07:15:04', '2022-12-07 07:15:04', 8),
(15, 'http://localhost:3006/image/product/1670397304813-banner-2-1.jpg', '2022-12-07 07:15:04', '2022-12-07 07:15:04', 8),
(16, 'http://localhost:3006/image/product/1670397391828-product-4.jpg', '2022-12-07 07:16:31', '2022-12-07 07:16:31', 9),
(17, 'http://localhost:3006/image/product/1670397391828-product-13.jpg', '2022-12-07 07:16:31', '2022-12-07 07:16:31', 9),
(18, 'http://localhost:3006/image/product/1670397521540-quick-view-3.jpg', '2022-12-07 07:18:41', '2022-12-07 07:18:41', 10),
(19, 'http://localhost:3006/image/product/1670397521540-quick-view-4.jpg', '2022-12-07 07:18:41', '2022-12-07 07:18:41', 10),
(20, 'http://localhost:3006/image/product/1670397595997-product-11.jpg', '2022-12-07 07:19:56', '2022-12-07 07:19:56', 11),
(21, 'http://localhost:3006/image/product/1670397595997-product-17.jpg', '2022-12-07 07:19:56', '2022-12-07 07:19:56', 11),
(22, 'http://localhost:3006/image/product/1670397673362-product-12.jpg', '2022-12-07 07:21:13', '2022-12-07 07:21:13', 12),
(23, 'http://localhost:3006/image/product/1670397673362-product-15.jpg', '2022-12-07 07:21:13', '2022-12-07 07:21:13', 12),
(24, 'http://localhost:3006/image/product/1670397749627-product-6.jpg', '2022-12-07 07:22:29', '2022-12-07 07:22:29', 13),
(25, 'http://localhost:3006/image/product/1670397749627-product-16.jpg', '2022-12-07 07:22:29', '2022-12-07 07:22:29', 13),
(26, 'http://localhost:3006/image/product/1670397806301-product-9.jpg', '2022-12-07 07:23:26', '2022-12-07 07:23:26', 14),
(27, 'http://localhost:3006/image/product/1670397806301-product-10.jpg', '2022-12-07 07:23:26', '2022-12-07 07:23:26', 14),
(28, 'http://localhost:3006/image/product/1670397806302-product-17.jpg', '2022-12-07 07:23:26', '2022-12-07 07:23:26', 14);

-- --------------------------------------------------------

--
-- Table structure for table `importbilldetails`
--

CREATE TABLE `importbilldetails` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `importBillId` int(11) DEFAULT NULL,
  `productDetailId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `importbills`
--

CREATE TABLE `importbills` (
  `id` int(11) NOT NULL,
  `total` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employeeId` int(11) DEFAULT NULL,
  `warehouseId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productDetailId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`id`, `quantity`, `price`, `createdAt`, `updatedAt`, `orderId`, `productDetailId`) VALUES
(1, 3, 3, '2022-12-07 07:33:43', '2022-12-07 07:33:43', 1, 2),
(2, 3, 10, '2022-12-07 07:33:43', '2022-12-07 07:33:43', 1, 12);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `orderdate` datetime NOT NULL,
  `ordertotal` int(11) NOT NULL,
  `paymentstatus` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `addressId` int(11) DEFAULT NULL,
  `orderStatusId` int(11) DEFAULT NULL,
  `paymentMethodId` int(11) DEFAULT NULL,
  `shippingMethodId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `employeeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `orderdate`, `ordertotal`, `paymentstatus`, `createdAt`, `updatedAt`, `addressId`, `orderStatusId`, `paymentMethodId`, `shippingMethodId`, `userId`, `employeeId`) VALUES
(1, '2022-12-07 07:33:43', 902000, 1, '2022-12-07 07:33:43', '2022-12-07 07:33:43', 1, 1, 1, 2, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orderstatuses`
--

CREATE TABLE `orderstatuses` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderstatuses`
--

INSERT INTO `orderstatuses` (`id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Processing', '2022-12-07 08:25:32', '2022-12-07 08:25:32'),
(2, 'packed', '2022-12-07 08:26:51', '2022-12-07 08:26:51');

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paymentmethods`
--

INSERT INTO `paymentmethods` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'VN_Pay', '2022-12-07 08:28:08', '2022-12-07 08:28:08'),
(2, 'cash', '2022-12-07 08:28:42', '2022-12-07 08:28:42');

-- --------------------------------------------------------

--
-- Table structure for table `producers`
--

CREATE TABLE `producers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `producers`
--

INSERT INTO `producers` (`id`, `name`, `phone`, `email`, `address`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Liên Hùng', '0398776328', 'lienhung@gmail.com', 'Ninh kiều, Cần Thơ', '2022-12-07 06:50:46', '2022-12-07 06:50:46', NULL),
(2, 'HaLy', '0391232133', 'haly@gmail.com', 'Bình Thủy, Cần Thơ', '2022-12-07 06:51:55', '2022-12-07 06:51:55', NULL),
(3, 'Thiên Anh', '0320558344324', 'thienanh@gmail.com', 'Cái Răng, Cần Thơ', '2022-12-07 06:53:14', '2022-12-07 06:53:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productdetailpromotions`
--

CREATE TABLE `productdetailpromotions` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productdetails`
--

CREATE TABLE `productdetails` (
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `producerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productdetails`
--

INSERT INTO `productdetails` (`id`, `price`, `color`, `size`, `createdAt`, `updatedAt`, `productId`, `producerId`) VALUES
(1, 15, 'white', '20x30x50', '2022-12-07 07:00:10', '2022-12-07 07:00:10', 1, 1),
(2, 3, 'white', '10x10x12', '2022-12-07 07:05:26', '2022-12-07 07:05:26', 2, 2),
(3, 7, 'black', '50x30x10', '2022-12-07 07:07:11', '2022-12-07 07:07:11', 3, 3),
(4, 25, 'blue', '200x40x100', '2022-12-07 07:08:23', '2022-12-07 07:08:23', 4, 1),
(5, 18, 'white', '150x40x60', '2022-12-07 07:09:59', '2022-12-07 07:09:59', 5, 1),
(6, 5, 'white', '10x20x10', '2022-12-07 07:11:35', '2022-12-07 07:11:35', 6, 3),
(7, 4, 'green', '5x10x8', '2022-12-07 07:13:26', '2022-12-07 07:13:26', 7, 3),
(8, 6, 'white', '15x5x15', '2022-12-07 07:15:04', '2022-12-07 07:15:04', 8, 2),
(9, 12, 'blue', '8x8x5', '2022-12-07 07:16:31', '2022-12-07 07:16:31', 9, 2),
(10, 32, 'black', '50x50x70', '2022-12-07 07:18:41', '2022-12-07 07:18:41', 10, 1),
(11, 19, 'wood', '20x30x25', '2022-12-07 07:19:56', '2022-12-07 07:19:56', 11, 1),
(12, 10, 'white', '15x15x15', '2022-12-07 07:21:13', '2022-12-07 07:21:13', 12, 3),
(13, 14, 'green', '15x18x15', '2022-12-07 07:22:29', '2022-12-07 07:22:29', 13, 2),
(14, 18, 'black', '40x40x20', '2022-12-07 07:23:26', '2022-12-07 07:23:26', 14, 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `createdAt`, `updatedAt`, `categoryId`) VALUES
(1, 'pine table', 'desk for study and work. A table with high aesthetics, high durability, used', '2022-12-07 07:00:10', '2022-12-07 07:00:10', 1),
(2, 'Wooden Bowl', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:05:26', '2022-12-07 07:05:26', 8),
(3, 'iron chair', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:07:11', '2022-12-07 07:07:11', 2),
(4, 'iron shelf', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:08:23', '2022-12-07 07:08:23', 4),
(5, 'wood cabinets', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:09:59', '2022-12-07 07:09:59', 3),
(6, 'lamp room', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:11:35', '2022-12-07 07:11:35', 5),
(7, 'wall lamp', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:13:26', '2022-12-07 07:13:26', 6),
(8, 'wall clock', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:15:04', '2022-12-07 07:15:04', 9),
(9, 'clock', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:16:31', '2022-12-07 07:16:31', 9),
(10, 'outdoor', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:18:41', '2022-12-07 07:18:41', 7),
(11, 'wood chair', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:19:55', '2022-12-07 07:19:55', 2),
(12, 'bowl', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:21:13', '2022-12-07 07:21:13', 8),
(13, 'outdoor lamp', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:22:29', '2022-12-07 07:22:29', 5),
(14, 'chair', 'Can be used for many different things. A product with high aesthetics, high durability, use', '2022-12-07 07:23:26', '2022-12-07 07:23:26', 2);

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `discount` int(11) NOT NULL,
  `startdate` datetime NOT NULL,
  `enddate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employeeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `star` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productDetailId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shippingmethods`
--

CREATE TABLE `shippingmethods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shippingmethods`
--

INSERT INTO `shippingmethods` (`id`, `name`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Fast delivery', 3, '2022-12-07 06:44:15', '2022-12-07 06:48:03'),
(2, 'Economical delivery', 2, '2022-12-07 06:45:59', '2022-12-07 06:45:59');

-- --------------------------------------------------------

--
-- Table structure for table `storeinformations`
--

CREATE TABLE `storeinformations` (
  `id` int(11) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `useraddresses`
--

CREATE TABLE `useraddresses` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  `addressId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'user',
  `googleid` varchar(255) DEFAULT NULL,
  `facebookid` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `emailverified` varchar(255) DEFAULT '0',
  `fullname` varchar(255) DEFAULT NULL,
  `dayofbirth` datetime DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `cccd` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `role`, `googleid`, `facebookid`, `image`, `emailverified`, `fullname`, `dayofbirth`, `gender`, `phone`, `cccd`, `createdAt`, `updatedAt`) VALUES
(2, 'Admin123!', '$2b$10$mpwfB5LrPCg3zyTIxIcjp.87Bx1BfCfzASm5PHfbeSm1jYbBW8BjS', 'dienb1910055@student.ctu.edu.vn', 'admin', NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, '2022-12-07 06:31:07', '2022-12-07 06:33:03'),
(3, 'User123!', '$2b$10$KGZsqQJWvOxPoctNwUP3yuhEN5HsoV/esxcz7yPF6/KWV0r/YP4w2', 'dien060620010@gmail.com', 'user', NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, '2022-12-07 07:29:56', '2022-12-07 07:31:18');

-- --------------------------------------------------------

--
-- Table structure for table `warehousedetails`
--

CREATE TABLE `warehousedetails` (
  `id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `warehouseId` int(11) DEFAULT NULL,
  `productDetailId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warehousedetails`
--

INSERT INTO `warehousedetails` (`id`, `stock`, `createdAt`, `updatedAt`, `warehouseId`, `productDetailId`) VALUES
(1, 45, '2022-12-07 07:00:10', '2022-12-07 07:00:10', 1, 1),
(2, 152, '2022-12-07 07:05:26', '2022-12-07 07:33:43', 1, 2),
(3, 22, '2022-12-07 07:07:11', '2022-12-07 07:07:11', 1, 3),
(4, 14, '2022-12-07 07:08:23', '2022-12-07 07:08:23', 1, 4),
(5, 65, '2022-12-07 07:09:59', '2022-12-07 07:09:59', 1, 5),
(6, 102, '2022-12-07 07:11:35', '2022-12-07 07:11:35', 1, 6),
(7, 125, '2022-12-07 07:13:26', '2022-12-07 07:13:26', 1, 7),
(8, 23, '2022-12-07 07:15:04', '2022-12-07 07:15:04', 1, 8),
(9, 24, '2022-12-07 07:16:31', '2022-12-07 07:16:31', 1, 9),
(10, 45, '2022-12-07 07:18:41', '2022-12-07 07:18:41', 1, 10),
(11, 210, '2022-12-07 07:19:56', '2022-12-07 07:19:56', 1, 11),
(12, 47, '2022-12-07 07:21:13', '2022-12-07 07:33:43', 1, 12),
(13, 215, '2022-12-07 07:22:29', '2022-12-07 07:22:29', 1, 13),
(14, 56, '2022-12-07 07:23:26', '2022-12-07 07:23:26', 1, 14);

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'NinhKieu warehouse', 'Ninh kiều, Cần Thơ', '2022-12-07 06:41:51', '2022-12-07 06:41:51'),
(2, 'Hung Loi Warehouse', 'Hưng Lợi, Cần Thơ', '2022-12-07 06:43:22', '2022-12-07 06:43:56');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productDetailId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartdetails`
--
ALTER TABLE `cartdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productDetailId` (`productDetailId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent` (`parent`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productDetailId` (`productDetailId`);

--
-- Indexes for table `importbilldetails`
--
ALTER TABLE `importbilldetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `importBillId` (`importBillId`),
  ADD KEY `productDetailId` (`productDetailId`);

--
-- Indexes for table `importbills`
--
ALTER TABLE `importbills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employeeId` (`employeeId`),
  ADD KEY `warehouseId` (`warehouseId`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productDetailId` (`productDetailId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addressId` (`addressId`),
  ADD KEY `orderStatusId` (`orderStatusId`),
  ADD KEY `paymentMethodId` (`paymentMethodId`),
  ADD KEY `shippingMethodId` (`shippingMethodId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `orderstatuses`
--
ALTER TABLE `orderstatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producers`
--
ALTER TABLE `producers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productdetailpromotions`
--
ALTER TABLE `productdetailpromotions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productdetails`
--
ALTER TABLE `productdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `producerId` (`producerId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productDetailId` (`productDetailId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `shippingmethods`
--
ALTER TABLE `shippingmethods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `storeinformations`
--
ALTER TABLE `storeinformations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `useraddresses`
--
ALTER TABLE `useraddresses`
  ADD PRIMARY KEY (`userId`,`addressId`),
  ADD KEY `addressId` (`addressId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `warehousedetails`
--
ALTER TABLE `warehousedetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `warehouseId` (`warehouseId`),
  ADD KEY `productDetailId` (`productDetailId`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productDetailId` (`productDetailId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cartdetails`
--
ALTER TABLE `cartdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `importbilldetails`
--
ALTER TABLE `importbilldetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `importbills`
--
ALTER TABLE `importbills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orderstatuses`
--
ALTER TABLE `orderstatuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `producers`
--
ALTER TABLE `producers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `productdetailpromotions`
--
ALTER TABLE `productdetailpromotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productdetails`
--
ALTER TABLE `productdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shippingmethods`
--
ALTER TABLE `shippingmethods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `storeinformations`
--
ALTER TABLE `storeinformations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `warehousedetails`
--
ALTER TABLE `warehousedetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cartdetails`
--
ALTER TABLE `cartdetails`
  ADD CONSTRAINT `cartdetails_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cartdetails_ibfk_2` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `importbilldetails`
--
ALTER TABLE `importbilldetails`
  ADD CONSTRAINT `importbilldetails_ibfk_1` FOREIGN KEY (`importBillId`) REFERENCES `importbills` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `importbilldetails_ibfk_2` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `importbills`
--
ALTER TABLE `importbills`
  ADD CONSTRAINT `importbills_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `importbills_ibfk_2` FOREIGN KEY (`warehouseId`) REFERENCES `warehouses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`orderStatusId`) REFERENCES `orderstatuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`shippingMethodId`) REFERENCES `shippingmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_6` FOREIGN KEY (`employeeId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `productdetails`
--
ALTER TABLE `productdetails`
  ADD CONSTRAINT `productdetails_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `productdetails_ibfk_2` FOREIGN KEY (`producerId`) REFERENCES `producers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `promotions`
--
ALTER TABLE `promotions`
  ADD CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `useraddresses`
--
ALTER TABLE `useraddresses`
  ADD CONSTRAINT `useraddresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `useraddresses_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `warehousedetails`
--
ALTER TABLE `warehousedetails`
  ADD CONSTRAINT `warehousedetails_ibfk_1` FOREIGN KEY (`warehouseId`) REFERENCES `warehouses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `warehousedetails_ibfk_2` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `wishlists_ibfk_1` FOREIGN KEY (`productDetailId`) REFERENCES `productdetails` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlists_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
