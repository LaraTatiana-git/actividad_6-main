Crear ramas locales: Crea una nueva rama desde tu commit actual.
Revertir al estado inicial: Utiliza git reset para volver al estado inicial antes de hacer tu primer commit.
Hacer commits incrementales: Añade los cambios de forma incremental y haz commits para cada conjunto de cambios.
Aquí están los pasos detallados:

Crear una nueva rama:

git checkout -b nueva-rama
Revertir al estado inicial:

git reset HEAD^  # Esto deshará el último commit pero mantendrá los cambios en el área de trabajo.
Hacer commits incrementales:

Añade los cambios que quieres en el primer commit:
bash
git add archivo1 archivo2  # Añade los archivos específicos
git commit -m "Primer commit"
Repite el proceso para los siguientes commits:
bash
git add archivo3 archivo4
git commit -m "Segundo commit"
Fusionar la rama:

bash
git checkout main  # Vuelve a la rama principal
git merge nueva-rama  # Fusiona los cambios
Recuerda que también puedes usar git add -p para añadir cambios de forma interactiva y hacer commits más pequeños.
