FROM python:3.11

ENV PYTHONUNBUFFERED 1

COPY . /app 

WORKDIR /app

CMD python -m http.server 8080


