# # Suma
# a= input("ingresa variable a:")
# b= input("ingresa variable b:")

# a=int(a)
# b=int(b)

# suma = a + b
# print("La suma es:", suma)

# frutas=['vaca','salir','cereza']

# for fruta in frutas:
#     print (fruta)


# class Persona:
#     def __init__(self, nombre, edad):
#         self.nombre = nombre
#         self.edad = edad

#     def saludar(self):
#         print("¡Hola! Mi nombre es", self.nombre)

#     def envejecer(self, años):
#         self.edad += años

# cantidad = int(input('Ingresa la cantidad de usuarios: '))

# personas = []

# for i in range(cantidad):
#     nom = input('Ingresa nombre de usuario: ')
#     ed = int(input('Ingresa edad: '))
#     personas.append(Persona(nom, ed))

# for persona in personas:
#     print("Nombre:", persona.nombre)
#     print("Edad:", persona.edad)

# personas[1].saludar()

# Llamar al método saludar()




class Persona:
    def __init__(self, nombre, cedula, price, destino):
        self.nombre = nombre
        self.cedula = cedula
        self.price = price
        self.destino = destino


valor = 7000
busesPasajeros = []
ValorTotal = 0
bus = 1

while bus == 1:
    pasajeros = []
    nuevoBus = input('¿Nuevo bus? (S/N): ')
    if nuevoBus != 'S':
        break

    desti = 'barbosa'
    capacidad = int(input('Ingrese la cantidad de pasajeros: '))

    destino = int(input('/BARBOSA: 1 /CIMITARRA: 2 /BUCARAMANGA: 3 Ingrese su destino: '))
    if destino == 2:
        valor = 20000
        desti = 'cimitarra'
    elif destino == 3:
        valor = 50000
        desti = 'bucaramanga'

    catidadFull = 1

    while catidadFull <= capacidad:
        nuevoT = input('¿Nuevo tiquete? (S/N): ')
        if nuevoT == 'S':
            name = input('Ingrese su nombre: ')
            cedula = input('Ingrese su cedula: ')

            ValorTotal += valor
            pasajeros.append(Persona(name, cedula, valor, desti))
            busesPasajeros.append(Persona(name, cedula, valor, desti))
            catidadFull += 1

        elif nuevoT != 'S':
            if catidadFull == 1:
                print('El bus se fue solo')
            break

    if catidadFull != 1:
        print('Lista de pasajeros del bus:')
        for pasajero in pasajeros:
            print('Pasajero:', pasajero.nombre, '- Cedula:', pasajero.cedula)




print('Lista de pasajeros de todos los buses:')
Dcimi=0
Dbuca=0
Dbar=0
Dcimim=0
Dbucam=0
Dbarm=0

for pasajero in busesPasajeros:
    print('Pasajero:', pasajero.nombre, '- Cedula:', pasajero.cedula, '- Precio:', pasajero.price, '- Destino:', pasajero.destino)
    if pasajero.destino=='cimitarra':
        Dcimi+=1
        Dcimim+=20000
    if pasajero.destino=='bucaramanga':
        Dbuca+=1
        Dbucam+=50000

    if pasajero.destino=='barbosa':
        Dbar+=1
        Dbarm+=7000



print('n° pasajeros Bucaramanga: ',Dbuca,' total recaudado: ',Dbucam)
print('n° pasajeros barbosa: ',Dbar,' total recaudado: ',Dbarm )
print('n° pasajeros cimitarra: ',Dcimi,' total recaudado: ',Dcimim )


print('Valor total recaudado:', ValorTotal)





