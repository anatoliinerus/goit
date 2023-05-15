## For testing purposes

```bash
# GET ALL BOOKS
curl --location 'https://goit-ndsi.onrender.com/api/books?limit=10&page=3'

# GET BOOK
curl --location 'https://goit-ndsi.onrender.com/api/books/64624f9ede226c77b1b9fd26'

# CREATE BOOK
curl --location 'https://goit-ndsi.onrender.com/api/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Harry Potter",
    "author": "Joanne Rowling"
}'

# UPDATE BOOK
curl --location --request PUT 'https://goit-ndsi.onrender.com/api/books/64624f9ede226c77b1b9fd02' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Harry Potter and someone else",
    "author": "Joanne Rowling"
}'

# DELETE BOOK
curl --location --request DELETE 'https://goit-ndsi.onrender.com/api/books/64624f9ede226c77b1b9fd27'
```
