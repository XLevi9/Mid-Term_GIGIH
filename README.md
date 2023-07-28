# Mid-Term_GIGIH
Mid Term Project (Backend Only) Oky Askal

## GitHub Public Repo URL
[https://github.com/XLevi9/Mid-Term_GIGIH]https://github.com/XLevi9/Mid-Term_GIGIH

## Database Structure
                    +-------------------+
                    |      Comment      |
                    +-------------------+
                    | _id               |
                    | name              |
                    | comment           |
                    | videoId ---------|---------+
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
             | videoId ---------|          | products    -----|-----+
             +-------------------+                           +-----|-----+
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
