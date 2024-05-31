-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS
, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS
, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE
, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pptortikinsk
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pptortikinsk
-- -----------------------------------------------------
CREATE SCHEMA
IF NOT EXISTS `pptortikinsk` DEFAULT CHARACTER
SET utf8 ;
USE `pptortikinsk`
;

-- -----------------------------------------------------
-- Table `pptortikinsk`.`users`
-- -----------------------------------------------------
CREATE TABLE
IF NOT EXISTS `pptortikinsk`.`users`
(
  `idusers` VARCHAR
(45) NOT NULL,
  `userFirstName` VARCHAR
(45) NOT NULL,
  `userLastName` VARCHAR
(45) NOT NULL,
  `userPhone` VARCHAR
(45) NOT NULL,
  `userEmale` VARCHAR
(45) NOT NULL,
  PRIMARY KEY
(`idusers`))
ENGINE = InnoDB;


SET SQL_MODE
=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS
=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS
=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `pptortikinsk`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `pptortikinsk`;
INSERT INTO `
pptortikinsk`.`users
`

(`idusers`, `userFirstName`, `userLastName`, `userPhone`, `userEmale`) VALUES
('1', 'admin', 'admin', '89996662233', 'qwerty@mail.ru');

COMMIT;

