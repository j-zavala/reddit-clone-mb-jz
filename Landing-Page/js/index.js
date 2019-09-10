{
	"info": {
		"_postman_id": "325c8472-525a-43ef-b5f2-fdfe0d8355a5",
		"name": "thesi",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "signup",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"email\" : \"wonderwoman@superhero.com\",\n\t\"password\" : \"wonder\",\n\t\"username\" : \"wonderwoman\"\n}"
				},
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/signup",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "create comment",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcm1hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI5Mzc2LCJpYXQiOjE1Njc3MTEzNzZ9.cZwSXnqkjsk6vLQI4P-QaELpR1RJT4Tl6hbf1DR5krlHbZ9ilb3CRt_On-g-Jg0C3MMIibl-udNtuePT36muhg",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"text\" : \"I don't think it's the dress. I think you are born cool.\"\n}"
				},
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/comment/3",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"comment",
						"3"
					]
				}
			},
			"response": []
		},
		{
			"name": "create post",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25kZXJ3b21hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI4NzM0LCJpYXQiOjE1Njc3MTA3MzR9.WihzP4SH8my6gPypBNJ9GIw2kBprsEOxjwDprLs8BcK8OQWbvP9Ne0GGNvsM0fWxBht77CZ1CyBzVbVVooS4Zg",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"title\" : \"I am super cool!!\",\n\t\"description\" : \"I think it's my dress that makes me so cool.\"\n}"
				},
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/post",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"post"
					]
				}
			},
			"response": []
		},
		{
			"name": "create profile",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25kZXJ3b21hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI4NzM0LCJpYXQiOjE1Njc3MTA3MzR9.WihzP4SH8my6gPypBNJ9GIw2kBprsEOxjwDprLs8BcK8OQWbvP9Ne0GGNvsM0fWxBht77CZ1CyBzVbVVooS4Zg",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"additionalEmail\" : \"wonderwoman@amazon.com\",\n\t\"mobile\" : \"000-000-0000\",\n\t\"address\" : \"Amazon\"\n}"
				},
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/profile",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"profile"
					]
				}
			},
			"response": []
		},
		{
			"name": "list all posts",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/post/list",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"post",
						"list"
					]
				}
			},
			"response": []
		},
		{
			"name": "get comments by Post Id",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/post/3/comment",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"post",
						"3",
						"comment"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete comment by commentId",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcm1hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTYzOTUxOTA5LCJpYXQiOjE1NjM5MzM5MDl9.W_eJb_sL3KVWBKqSvmA76W8D7aRgUjlwDCa-1e6yjtQCC8Lt-y94GiDCYZyEkNwTkzSkRb7Op28b2tGZ0TjPNg",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/comment/2",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"comment",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete post by Post Id",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcm1hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI5Mzc2LCJpYXQiOjE1Njc3MTEzNzZ9.cZwSXnqkjsk6vLQI4P-QaELpR1RJT4Tl6hbf1DR5krlHbZ9ilb3CRt_On-g-Jg0C3MMIibl-udNtuePT36muhg",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/post/1",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"post",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "get profile",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25kZXJ3b21hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI4NzM0LCJpYXQiOjE1Njc3MTA3MzR9.WihzP4SH8my6gPypBNJ9GIw2kBprsEOxjwDprLs8BcK8OQWbvP9Ne0GGNvsM0fWxBht77CZ1CyBzVbVVooS4Zg",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/profile",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"profile"
					]
				}
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"email\" : \"superman@superhero.com\",\n\t\"password\" : \"super\"\n}"
				},
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/login",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "get comments by User",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcm1hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI5Mzc2LCJpYXQiOjE1Njc3MTEzNzZ9.cZwSXnqkjsk6vLQI4P-QaELpR1RJT4Tl6hbf1DR5krlHbZ9ilb3CRt_On-g-Jg0C3MMIibl-udNtuePT36muhg",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/user/comment",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"user",
						"comment"
					]
				}
			},
			"response": []
		},
		{
			"name": "get posts by User",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25kZXJ3b21hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI4NzM0LCJpYXQiOjE1Njc3MTA3MzR9.WihzP4SH8my6gPypBNJ9GIw2kBprsEOxjwDprLs8BcK8OQWbvP9Ne0GGNvsM0fWxBht77CZ1CyBzVbVVooS4Zg",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/user/post",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"user",
						"post"
					]
				}
			},
			"response": []
		},
		{
			"name": "update profile",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25kZXJ3b21hbkBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY3NzI4NzM0LCJpYXQiOjE1Njc3MTA3MzR9.WihzP4SH8my6gPypBNJ9GIw2kBprsEOxjwDprLs8BcK8OQWbvP9Ne0GGNvsM0fWxBht77CZ1CyBzVbVVooS4Zg",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"mobile\" : \"111-111-1111\"\n}"
				},
				"url": {
					"raw": "http://thesi.generalassemb.ly:8080/profile",
					"protocol": "http",
					"host": [
						"thesi",
						"generalassemb",
						"ly"
					],
					"port": "8080",
					"path": [
						"profile"
					]
				}
			},
			"response": []
		}
	]
}



method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "BLAHaaaaa@BLAH.COM",
                password: "12345678a",
                username: "BLAH aaaaaBLAH"
            })
