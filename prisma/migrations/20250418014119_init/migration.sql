-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "nombreUsuario" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "nombre" TEXT,
    "imagenPerfil" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "spotifyId" TEXT,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioGenero" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "UsuarioGenero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artista" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "spotifyId" TEXT NOT NULL,
    "imagenUrl" TEXT,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtistaGenero" (
    "id" SERIAL NOT NULL,
    "artistaId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "ArtistaGenero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "spotifyId" TEXT NOT NULL,
    "fechaLanzamiento" TIMESTAMP(3) NOT NULL,
    "imagenUrl" TEXT,
    "tipoAlbum" TEXT NOT NULL,
    "totalCanciones" INTEGER NOT NULL,
    "artistaId" INTEGER NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumGenero" (
    "id" SERIAL NOT NULL,
    "albumId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "AlbumGenero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cancion" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "spotifyId" TEXT NOT NULL,
    "duracionMs" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,
    "artistaId" INTEGER NOT NULL,

    CONSTRAINT "Cancion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CancionGenero" (
    "id" SERIAL NOT NULL,
    "cancionId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "CancionGenero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reseña" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cancionId" INTEGER,
    "albumId" INTEGER,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reseña_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calificacion" (
    "id" SERIAL NOT NULL,
    "estrellas" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cancionId" INTEGER,
    "albumId" INTEGER,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Calificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestMusical" (
    "id" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "opciones" JSONB NOT NULL,
    "respuestas" JSONB NOT NULL,

    CONSTRAINT "TestMusical_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombreUsuario_key" ON "Usuario"("nombreUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Genero_nombre_key" ON "Genero"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Genero_spotifyId_key" ON "Genero"("spotifyId");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioGenero_usuarioId_generoId_key" ON "UsuarioGenero"("usuarioId", "generoId");

-- CreateIndex
CREATE UNIQUE INDEX "Artista_spotifyId_key" ON "Artista"("spotifyId");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistaGenero_artistaId_generoId_key" ON "ArtistaGenero"("artistaId", "generoId");

-- CreateIndex
CREATE UNIQUE INDEX "Album_spotifyId_key" ON "Album"("spotifyId");

-- CreateIndex
CREATE UNIQUE INDEX "AlbumGenero_albumId_generoId_key" ON "AlbumGenero"("albumId", "generoId");

-- CreateIndex
CREATE UNIQUE INDEX "Cancion_spotifyId_key" ON "Cancion"("spotifyId");

-- CreateIndex
CREATE UNIQUE INDEX "CancionGenero_cancionId_generoId_key" ON "CancionGenero"("cancionId", "generoId");

-- CreateIndex
CREATE UNIQUE INDEX "Reseña_usuarioId_cancionId_key" ON "Reseña"("usuarioId", "cancionId");

-- CreateIndex
CREATE UNIQUE INDEX "Reseña_usuarioId_albumId_key" ON "Reseña"("usuarioId", "albumId");

-- CreateIndex
CREATE UNIQUE INDEX "Calificacion_usuarioId_cancionId_key" ON "Calificacion"("usuarioId", "cancionId");

-- CreateIndex
CREATE UNIQUE INDEX "Calificacion_usuarioId_albumId_key" ON "Calificacion"("usuarioId", "albumId");

-- AddForeignKey
ALTER TABLE "UsuarioGenero" ADD CONSTRAINT "UsuarioGenero_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioGenero" ADD CONSTRAINT "UsuarioGenero_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistaGenero" ADD CONSTRAINT "ArtistaGenero_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "Artista"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistaGenero" ADD CONSTRAINT "ArtistaGenero_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "Artista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumGenero" ADD CONSTRAINT "AlbumGenero_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumGenero" ADD CONSTRAINT "AlbumGenero_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancion" ADD CONSTRAINT "Cancion_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancion" ADD CONSTRAINT "Cancion_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "Artista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancionGenero" ADD CONSTRAINT "CancionGenero_cancionId_fkey" FOREIGN KEY ("cancionId") REFERENCES "Cancion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancionGenero" ADD CONSTRAINT "CancionGenero_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_cancionId_fkey" FOREIGN KEY ("cancionId") REFERENCES "Cancion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calificacion" ADD CONSTRAINT "Calificacion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calificacion" ADD CONSTRAINT "Calificacion_cancionId_fkey" FOREIGN KEY ("cancionId") REFERENCES "Cancion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calificacion" ADD CONSTRAINT "Calificacion_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
