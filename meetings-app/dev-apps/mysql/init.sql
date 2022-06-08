CREATE SCHEMA `shoppingapp` ;


CREATE TABLE `shoppingapp`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));


INSERT INTO `shoppingapp`.`users` (`user_name`, `first_name`, `last_name`, `password`) VALUES ('ziv@ziv.com', 'ziv', 'ziva', 'e10adc3949ba59abbe56e057f20f883e');

CREATE TABLE `shoppingapp`.`teams` (
  `team_id` INT NOT NULL,
  `team_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`team_id`));

ALTER TABLE `shoppingapp`.`teams` 
CHANGE COLUMN `team_id` `team_id` INT NOT NULL AUTO_INCREMENT ;


INSERT INTO `shoppingapp`.`teams` (`team_name`) VALUES ('front_team');
INSERT INTO `shoppingapp`.`teams` (`team_name`) VALUES ('ui_team');
INSERT INTO `shoppingapp`.`teams` (`team_name`) VALUES ('beck_team');


CREATE TABLE `shoppingapp`.`meeting` (
  `meeting_id` INT NOT NULL AUTO_INCREMENT,
  `team_id` INT NOT NULL,
  `start_date` DATETIME NULL DEFAULT NULL,
  `end_date` DATETIME NULL DEFAULT NULL,
  `room` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`meeting_id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `shoppingapp`.`teams` (`team_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


INSERT INTO `shoppingapp`.`meeting` (`team_id`, `start_date`, `end_date`, `room`) VALUES ('1', '2022-06-08 08:00:00', '2022-06-08 08:30:00', 'red');
INSERT INTO `shoppingapp`.`meeting` (`team_id`, `start_date`, `end_date`, `room`) VALUES ('2', '2022-06-08 08:00:00', '2022-06-08 08:30:00', 'blue');
INSERT INTO `shoppingapp`.`meeting` (`team_id`, `start_date`, `end_date`) VALUES ('3', '2022-06-08 08:00:00', '2022-06-08 08:30:00');
