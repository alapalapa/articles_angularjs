(function(){
	var app = angular.module('article', []);

	app.controller('articleController', function(){
		this.articles = stored;
		this.edition = true;
		this.toEdit = null;
		
		this.addArticle = function(){
			this.articles.push({id:this.articles.length, author:this.newAuthor , title:this.newTitle , description:this.newDescription,show:true });
			this.newAuthor = '';
			this.newTitle = '';
			this.newDescription = '';
			this.edition = true;
		};
		
		this.deleted = function(idx){
			idx.show = false;
		};
		
		this.edit = function(idx){
			this.edition = false;
			this.toEdit = idx;
		};

		
		this.editArticle = function(){
			this.articles[this.toEdit.id] = {id:this.toEdit.id, author:this.toEdit.author , title:this.toEdit.title , description:this.toEdit.description,show:true };

			this.edition = true;
		};
		

	});

	var stored = [
		{
			id: 0,
			author: 'Roberto Segura',
			title: 'Angularjs Description',
			description: 'AngularJS is an open-source web application framework, maintained by Google and community, that assists with creating single-page applications, one-page web applications that only require HTML, CSS, and JavaScript on the client side. Its goal is to augment web applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier.',
			show: true,
		},
		{
			id: 1,
			author: 'Fatima Gonzalez',
			title: 'PHP Description',
			description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. As of January 2013, PHP was installed on more than 240 million websites (39% of those sampled) and 2.1 million web servers. Originally created by Rasmus Lerdorf in 1994, the reference implementation of PHP (the Zend Engine) is now produced by The PHP Group. While PHP originally stood for Personal Home Page, it now stands for PHP: Hypertext Preprocessor, a recursive backronym.',
			show: true,
		},
		{ 	
			id: 2,
			author: 'Alejandra Gallegos',
			title: 'Mysql Article',
			description: 'MySQL officially, but also called is (as of March 2014) the worlds second most widely used open-source relational database management system (RDBMS). It is named after co-founder Michael Wideniuss daughter, My. The SQL phrase stands for Structured Query Language. The MySQL development project has made its source code available under the terms of the GNU General Public License, as well as under a variety of proprietary agreements. MySQL was owned and sponsored by a single for-profit firm, the Swedish company MySQL AB, now owned by Oracle Corporation.',
			show: true,
		},
		{
			id: 3,
			author: 'Roberto Segura',
			title: 'Apache Cassandra',
			description: 'Apache Cassandra es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java. Permite grandes volumenes de datos en forma distribuida. Por ejemplo, lo usa Twitter para su plataforma. Su objetivo principal es la escalabilidad lineal y la disponibilidad. La arquitectura distribuida de Cassandra esta basada en una serie de nodos iguales que se comunican con un protocolo P2P con lo que la redundancia es maxima.',
			show: true,
		}
	];
	
	
})();
