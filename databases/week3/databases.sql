

CREATE SCHEMA `users` DEFAULT CHARACTER SET utf8 ;


CREATE TABLE `users`.`reservation` (
 
 
`id` INT NOT NULL AUTO_INCREMENT,

`number_of_guests` INT NULL,

`meal_id` INT NULL,

`created_date` DATE NULL,

`contact_phonenumber` VARCHAR(45) NULL,

`contact_name` VARCHAR(45) NULL,

`contact_email` VARCHAR(45) NULL,

PRIMARY KEY (`id`))
ENGINE = InnoDB

DEFAULT CHARACTER SET = utf8;

CREATE TABLE `users`.`meal` (


`id` INT NOT NULL AUTO_INCREMENT,

`tittle` VARCHAR(45) NULL,

`description` TEXT(250) NULL,
 
`location` VARCHAR(45) NULL,
 
`when` DATETIME(6) NULL,
 
`max_reservations` INT NULL,

`price` DECIMAL(45) NULL,

`created_date` DATE NULL,

PRIMARY KEY (`id`));


CREATE TABLE `users`.`review` (
 

`id` INT NOT NULL AUTO_INCREMENT,
 
 `tittle` VARCHAR(45) NULL,
 
  `description` TEXT(250) NULL,
 
 `meal_id` INT NULL,
 
 `stars` INT NULL,
 
 `created_date` DATE NULL,
 
 PRIMARY KEY (`id`))
ENGINE = InnoDB

DEFAULT CHARACTER SET = utf8;

-------------------meal atributes------------------

INSERT INTO `users`.`meal` (`id`, `tittle`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES ('1', 'Empanadas and Chocolate Cake', 'Learn to make empanadas and Argentinian classics', 'Argentina', '2020-11-04 10:23:11', '20', '29.9', '12/11/18');

INSERT INTO `users`.`meal` (`id`, `tittle`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES ('2', 'Moroccan Tajine', 'Learn to make a Spanish classic, the Valencian paella', 'colombia', '10:23:11', '18', '30.1', '12/10/19');

INSERT INTO `users`.`meal` (`id`, `tittle`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES ('3', 'Fresh Pasta', 'Private, one-on-one online instruction with a fun Spaniard', 'denmark', '10:23:11', '15', '54.3', '08/09/20');

INSERT INTO `users`.`meal` (`id`, `tittle`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES ('4', 'Homemade Gnocchi', 'Scheduled mutually at your convenience (host lives in Almeria, Spain (GMT+2))', 'egypt', '11:23:11', '19', '60.2', '07/11/19');

INSERT INTO `users`.`meal` (`id`, `tittle`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES ('5', 'French Quiche & Chocolate', 'Customization available for dietary restrictions or preferences', 'ucrain', '11:23:11', '21', '53.1', '06/02/19');


-------------------Reservation atributes---------------

INSERT INTO `users`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('1', '56', '9', '2018-11-17', '2763547', 'esperanza', 'e_melecio454@hotmail.com');

INSERT INTO `users`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('2', '76', '8', '2019-11-17', '9876543', 'erika', 'emaru@hotmail.com');

INSERT INTO `users`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('3', '65', '7', '2017-11-17', '2302876', 'cindy', 'cindyruiz@hotmail.com');

INSERT INTO `users`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('4', '87', '6', '2019-10-17', '2245674', 'diego', 'differ454@hotmail.com');

INSERT INTO `users`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES ('5', '45', '5', '2019-08-17', '2318752', 'gabriel', 'gabriel454@hotmail.com');




-------------------review atributes--------------------------

INSERT INTO `users`.`review` (`id`, `tittle`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('1', 'Empanadas and Chocolate Cake', 'very good', '3', '5', '2019-11-02');

INSERT INTO `users`.`review` (`id`, `tittle`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('2', 'Moroccan Tajine', 'nice', '4', '4', '2019-12-02');

INSERT INTO `users`.`review` (`id`, `tittle`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('3', 'Fresh Pasta', 'great', '5', '4', '2019-10-02');

INSERT INTO `users`.`review` (`id`, `tittle`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('4', 'Homemade Gnocchi', 'bad', '6', '1', '2019-09-02');

INSERT INTO `users`.`review` (`id`, `tittle`, `description`, `meal_id`, `stars`, `created_date`) VALUES ('5', 'French Quiche & Chocolate', 'very sweet', '2', '2', '2019-08-02');



------------------Queries to write Meal-----------------------------

-- Get all meals

SELECT tittle FROM users.meal;

-- Add a new meal 

INSERT INTO users.meal (id, tittle, description, location, when, max_reservation,price,created_date,) 
VALUES ('6', 'potatoes with sauce', 'is a great food ', 'panama', '2019-03-02 18:12:00', '34','57','2018-03-20');


-- Get a meal with any id

SELECT tittle FROM users.meal where id = 5 ;


-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE users.meal 
SET tittle = 'Rice with milk', location = 'afganistan', price = '90'   
WHERE id = 1;


-- Delete a meal with any id, fx 1

DELETE FROM users.meal WHERE id = 1;



------------------Queries to Reservation-----------------------------

-- Get all reservation

SELECT * FROM users.reservation;

-- Add a new reservation 

INSERT INTO users.reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name,contact_email) 
VALUES ('6', '48', '13 ', '2018-12-05', '2302871', 'valeria','gonzalo876@hotmail.com');


-- Get a reservation with any id

SELECT contact_name FROM users.reservation where id = 5 ;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE users.reservation 
SET number_of_guests = '56' , contact_phonenumber = '2309831' , contact_name = 'julian' 
WHERE id = 1;


-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE users.reservation 
SET contact_name = 'margaret', contact_email = 'facundo545@gmail.com' 
WHERE id = 3;

-- Delete a reservation with any id, fx 1

DELETE FROM users.reservation WHERE id = 3;


------------------Queries to Review-----------------------------

-- Get all reviews

SELECT * FROM users.review;

-- Add a new review 

INSERT INTO users.review (id, tittle, description, meal_id, stars, created_date) 
VALUES ('6', 'chinese rice', 'ecxellent ', '7', '5', '2018-06-17');


-- Get a review with any id

SELECT tittle FROM users.review where id = 5 ;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE users.review 
SET description = 'good' , stars = '3' , meal_id = '7' 
WHERE id = 3;

-- Delete a review with any id, fx 1

DELETE FROM users.review WHERE id = 3;


--Get meals that has a price smaller than a specific price fx 90

SELECT * 
FROM meal 
WHERE price < 90;

-- Get meals that still has available reservations

SELECT * FROM users.reservation
INNER JOIN meal 
ON reservation.meal_id = meal.id

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM meal WHERE title LIKE 'Rød grød med fløde%';

-- Get meals that has been created between two dates

SELECT * FROM meal WHERE (created_date BETWEEN '2008-09-20' AND '2012-10-19');

-- Get only specific number of meals fx return only 5 meals

SELECT * FROM meal LIMIT 5;

-- Get the meals that have good reviews

SELECT * FROM users.review
 INNER JOIN users.meal 
ON review.meal_id = meal.id 
WHERE review.stars = 5;

-- Get reservations for a specific meal sorted by created_date

SELECT * FROM users.reservation 
INNER JOIN  meal
 ON reservation.meal.id = meal.id 
WHERE created_date = '2018-11-17'

--Sort all meals by average number of stars in the reviews

SELECT * FROM users.review 
INNER JOIN meal ON review.meal_id = meal.id 
ORDER BY review.stars DESC;



