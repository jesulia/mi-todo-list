# Usa la imagen oficial de Node.js
FROM node:18

# Crea y usa el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del backend
COPY . .

# Instala dependencias
RUN npm install

# Expone el puerto (ajústalo si tu backend usa otro)
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
