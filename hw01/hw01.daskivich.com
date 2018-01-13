server {
	listen 80;
	listen [::]:80;

	root /home/dan/www/hw01.daskivich.com;

	index hw01.html;

	server_name hw01.daskivich.com;

	location / {
		try_files $uri $uri/ =404;
	}
}
