create schema farmhub;

use farmhub;

select * from users;

# query insert
insert into users (email,password,fullname,address,phone_number,role)
values ('fikri@fikri.com','abc123','jamaludin fikri','bandung',082364734312,'pembeli');

# query update
update products
set price=25000, name='apel fuji'
where id = 1;

# delete table => truncate (itu cuma row) / drop (hard) 

# delete data 
delete from products
where id=5;

delete from products
where id_penjual = 3;



select * from products;