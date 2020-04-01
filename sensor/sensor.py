import json
from ev3dev2.sensor.lego import UltrasonicSensor
from ev3devs.sensor.lego import ColorSensor
from time import sleep


cs = ColorSensor()
us = UltrasonicSensor()
us.mode = 'US-DIST-CM'
cs.mode = 'COL-COLOR'

my_us = {
        'Name' : 'Grocery'}

on_cs = {
        'Name' : 'Lights_On'}

off_cs = {
        'Name' : 'Lights_off'}



while True:
    print('Ultrasonic Sensor :', us.va;ue())
    if us.value() > 40:
        with open('jar.json', 'w') as json_file:
            json.dump(my_us, json_file)

    print('Color Sensor :', cs.value())
    if cs.value == 0:
        with open('light.json', 'w') as josn_file:
            json.dump(on_cs, json_file)

    else: 
        with open('light.json', 'w') as json_file:
            json.dump(off_cs, json_file)


    sleep(2)

    break

