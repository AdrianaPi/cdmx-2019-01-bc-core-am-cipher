# ¿Qué es Guardatos SAT?

Es una web app pensada para cifrar la [CIEC](https://blog.docdigitales.com/2018/04/05/que-es-la-ciec/) (Clave de Identificación Electrónica Confidencial) empleada en el sitio del [SAT](https://www.sat.gob.mx/home) (Servicio de Administración Tributaria) y hacerla portable. La CIEC es una herramienta útil para realizar diferentes acciones, como: facturar, presentar declaraciones o modificar datos.

## Para empezar:

Para tener acceso a este proyecto deberás seguir los siguientes pasos:

1. Antes que nada, asegúrate de tener un 📝 editor de texto en condiciones, algo como [Atom](https://atom.io/) , [Visual Code](https://code.visualstudio.com/), [Sublime  Text](https://www.sublimetext.com/3) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una 🐚 [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell), que es un programa que interpreta líneas de comando (command-line interpreter) así como tener [git](https://git-scm.com/) instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una *shell* (terminal) instalada por defecto (y probablemente `git` también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win), aunque recomendaría que consideres probar 🐧 GNU/Linux como tu Sistema Operativo.
3. Haz tu propio 🍴 [fork](https://help.github.com/articles/fork-a-repo/) de este repositorio de tu cohort. Solo selecciona en el menú la opción.
4. ⬇️ Clona tu *fork* a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm` `install`. Esto asume que has instalado [Node.js](https://nodejs.org/en/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las 🚥 pruebas unitarias (unit tests) con el comando `npm` `run` `test`.
7. ¡Listo! 🚀


## ¿Quiénes son los usuarios?

Está dirigido a [personas físicas](![myimage-alt-tag](url-to-image)) que usan el portal SAT para cumplir con sus obligaciones fiscales. 

### Objetivos:

* Fácil acceso a la CIEC desde cualquier sitio al almacenarla en el correo. 
* Brindar seguridad en la portación de los datos al mantenerse cifrada.

## Pensando en el Usuario.

La CIEC  es indispensable para realizar cualquier movimiento. Es usual realizar dichos procedimientos en distintos sitios, lo que implica recordarla o al menos tenerla anotada en alguna parte, es de suponer las dificultades que esto conlleva. Aunado, me tocó observar esta complicación en los compañeros de trabajo, es decir, profesionistas con pocos conocimientos sobre impuestos y directamente en las oficinas del servicio. 

Ahora bien, pensar en las personas físicas que están inscritas en el SAT, es partir de una población diversa, pues se incluyen desde el profesionista bajo honorarios hasta el pequeño comerciante. Lo anterior es relevante, ya que no todos cuentan con el mismo nivel de experiencia en el uso de internet. Así, en función de su conocimiento es posible concluir que habrá un sector que prefiera el servicio presencial, y otros lo harán de manera remota.  

Así, la webapp es un opción para aquellos que opten por realizar sus trámites por internet. Se busca evitar perder la CIEC y tener que iniciar el procedimiento de recuperación, lo cual repercute en tiempo. Con Guardatos Sat tendrán la clave accesible desde cualquier lugar, lista para ser insertada en cualquier formulario y con la seguridad de que será confidencial al permanecer cifrada. El usuario obtendrá agilidad en los procedimientos y reducción en el tiempo de espera.

## Diseño

La web app tiene un diseño de colores claros y de fácil desarrollo. La razón es dar al usuario la simpleza en el manejo, con el fin de optimizar el tiempo de interacción con la página. Pensando en el contexto del SAT, es necesario trabajar herramientas que permitan enfocarse en el trámite de impuestos, más que en intentar desentrañar el funcionamiento de los propios portales.


