# Mid-Term_GIGIH
Mid Term Project (Backend Only) Oky Askal

## GitHub Public Repo URL
[Link Github Repo]https://github.com/XLevi9/Mid-Term_GIGIH

## Database Structure
                    +-------------------+
                    |      Comment      |
                    +-------------------+
                    | _id               |
                    | name              |
                    | comment           |
                    | videoId ----------|---------+
                    +-------------------+         |
                                                  |
                                                  |
                                                  | 1 | n
             +-------------------+          +-------------------+
             |      Product      |          |       Video       |
             +-------------------+          +-------------------+
             | _id               |          | _id               |
             | link              |          | title             |
             | title             |          | url               |
             | price             |          | thumbnail         |
             | videoId ----------|          | products    ------|----|-+
             +-------------------+          +-------------------+    |
                                                                     |
                                                                     |
                                                                     |
                                                                   1 | n
                                                            +-------------------+
                                                            |       Video       |
                                                            +-------------------+
                                                            | _id               |
                                                            | title             |
                                                            | url               |
                                                            | thumbnail         |
                                                            | products          |
                                                            +-------------------+

- The "Comment" entity has attributes _id, name, comment, and videoId. The videoId is a foreign key that connects comments with a specific video in the "Video" entity.
- The "Product" entity has attributes _id, link, title, price, and videoId. The videoId is a foreign key that connects products with a specific video in the "Video" entity.
- The "Video" entity has attributes _id, title, url, thumbnail, and products. The products attribute is an array that contains IDs or names of products associated with a specific video in the "Product" entity.


## API STRUCTURE 
### Video API
#### GET All Videos
- Endpoint: '/videos'
- Deskripsi: Mengambil semua data video dari koleksi "Video".
- Response: JSON array berisi data-video.

#### GET Single Video
- Endpoint: '/videos/:id'
- Deskripsi: Mengambil data video berdasarkan ID yang diberikan.
- Parameter: 'id' (ID video yang ingin diambil).
- Response: JSON objek berisi data video.

### Comment API
#### GET Comments by Video ID
- Endpoint: '/comments/:videoId'
- Deskripsi: Mengambil semua komentar yang terkait dengan video tertentu.
- Parameter: 'videoId' (ID video yang ingin dilihat komentarnya).
- Response: JSON array berisi data komentar.

#### POST Add Comment
- Endpoint: '/comments'
- Deskripsi: Menambahkan komentar baru ke koleksi "Comment".
- Request: JSON objek dengan atribut 'name', 'comment', dan 'videoId'.
- Response: JSON objek berisi data komentar yang baru ditambahkan.

### Product API
#### GET Products by Video ID
- Endpoint: '/products/:videoId'
- Deskripsi: Mengambil semua produk yang terkait dengan video tertentu.
- Parameter: 'videoId'(ID video yang ingin dilihat produknya).
- Response: JSON array berisi data produk.

## HOW TO RUN in Local
To run the API locally on your machine, follow these steps:

### Clone the repository:
git clone https://github.com/XLevi9/Mid-Term_GIGIH.git
cd Mid-Term_GIGIH
### Install the dependencies:
npm install
### Set up your database (if required).
### Start the server:
npm start
The API should now be running on 'http://localhost:5000'
### Please ensure that you have Node.js and npm installed on your machine before running the API locally.

If you encounter any issues while running the API, feel free to contact me at 
oky.b20@mhs.unsyiah.ac.id

