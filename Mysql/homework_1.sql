create schema mpg;

use mpg;
select * from data;



# 10 mobil paling irit
select * from data order by mpg desc limit 10;


# 10 mobil paling boros
select * from data order by mpg asc limit 10;

# perbandingan avg mpg, avg horsepower,avg displacement berdasarkan origin
select origin,avg(mpg), avg(horsepower), avg(displacement) from data group by origin;

# total mobil yang ada kata chevrolet
select count(*) from data where name like '%chevrolet%';

# perbandingan avg mpg, avg horsepower,avg displacement berdasarkan cylinders
select cylinders,avg(mpg), avg(horsepower), avg(displacement) from data group by cylinders;

# tampilkan data mobil jepang paling irit
select * from data where mpg = 
(select max(mpg) from data where origin = 'japan') and origin = 'japan' limit 1;

select * from data where origin = 'japan' order by mpg desc limit 1;


# mobil dengan horsepower diatas rata rata dan paling irit
select * from data where horsepower >
(select avg(horsepower) from data) order by mpg desc limit 1;

# tampilkan data mobil america yang paling boros
select * from data where origin = 'usa' order by mpg asc limit 1;

# tampilkan 3 data mobil paling boros dan mempunyai horsepower dibawah rata rata serta punya weight dibawah rata rata
select * from data where horsepower <
(select avg(horsepower) from data) and weight <
(select avg(weight) from data) order by mpg asc limit 3;



