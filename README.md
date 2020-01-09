per passar de shp to postgis

> shp2pgsql.exe -s 4326 -I d:\SOFT\mygeodata\cat-polygon  public.cat > d:\TEMP\fcoc.cat.sql
>

per guardar-ho a la BD

> psql.exe -d postgres -h localhost -U postgres -p5432 -f D:\TEMP\fcoc.cat.sql
>


