# language: es

Característica: Agregar gastos a un grupo

  Regla: Cualquier persona que agregue un gasto a un grupo se convierte automáticamente en miembro del grupo

    Escenario: Agregar gasto siendo externo al grupo
      Dado que existe un grupo con los miembros "ana" y "luis", sin incluir al usuario
      Cuando el usuario agrega un gasto
      Entonces la lista de miembros pasa a ser "ana", "luis" y el usuario


    Escenario: Agregar gasto siendo miembro del grupo
      Dado que existe un grupo con los miembros "ana" y el usuario
      Cuando el usuario agrega un gasto
      Entonces la lista de miembros del grupo sigue siendo "ana" y el usuario
