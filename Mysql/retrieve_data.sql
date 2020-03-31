# buat pilih database
use titanic;

# select kolom from nama_table
select * from data;
select survived,pclass,sex from data;

# conditional selection
select * from data where survived = 1;

select * from data 
where survived = 1 and sex = 'female';

# sorting descending or ascending
select * from data order by fare desc;

# function count sum avg min max

select max(fare) from data;
select max(fare) from data where pclass = 3;
select min(fare) from data where pclass = 1;


select count(*) from data where survived = 0;
select sum(fare) from data;
select count(fare) from data;
select avg(age) from data;
select avg(age) as rata_rata_umur_mati from data where survived = 0;



# data ada 2 type = categorical, numeric
# grouping => group your data based on categorical column
select sex,avg(age) as age, avg(fare) as fare from data group by sex;
select pclass,avg(age) as age,avg(fare) as fare from data group by pclass;
select survived,avg(age) as age, avg(fare) as fare from data group by survived;
select sex,count(*) as total from data where survived =0 group by sex;
select sex,count(*) as total from data group by sex;
select who, count(who) as total, round(avg(age)) as age from data group by who;



# Limit
select * from data limit 10;

select * from data 
order by age asc 
limit 10;


# Sub Query
# munculin data yang umurnya diatas rata rata umur

select * from data where age > (select avg(age) from data);

# Where like
# StartWith 
select * from data where sex like "fe%";

# EndWith
select * from data where class like '%rd';

# Include
select * from data where sex like "%em%";



# Having
# Filtering in View mode
select sex as gender, pclass, survived from data having gender = 'female';




# cari data yang umurnya diatas rata rata man dan dia hidup
select * from data where age >
(select avg(age) from data where who = 'man') and survived = 1;



# berapa total orang meninggal di kelas eksekutive
select count(*) from data where survived = 0 and pclass = 1;



# berapa total wanita yang meninggal di kelas eksekutive
select count(*) from data where survived = 0 and pclass = 1 and who = 'woman';



# cari data orang yang harga tiketnya diatas rata rata dan umur nya diatas rata rata yang masih hidup

select * from data where age >
(select avg(age) from data) and fare > 
(select avg(fare) from data) and survived = 1;


select fare + 10/100 * fare as price_after_tax from data;















