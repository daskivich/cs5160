server {
	listen 80;
	listen [::]:80;

	root /home/dan/www/hw02.daskivich.com;

	index index.html;

	server_name hw02.daskivich.com;

	location / {
		try_files $uri $uri/ =404;
	}
}
