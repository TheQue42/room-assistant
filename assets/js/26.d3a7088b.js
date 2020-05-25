(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{375:function(e,t,s){"use strict";s.r(t);var r=s(39),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"xiaomi-mi-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xiaomi-mi-sensors"}},[e._v("#")]),e._v(" Xiaomi Mi Sensors")]),e._v(" "),s("p",[s("strong",[e._v("Integration Key:")]),e._v(" "),s("code",[e._v("xiaomiMi")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Using this together with "),s("a",{attrs:{href:"./bluetooth-classic"}},[e._v("Bluetooth Classic")]),e._v(" requires multiple Bluetooth adapters.\nUsing this together with "),s("a",{attrs:{href:"./bluetooth-low-energy"}},[e._v("Bluetooth Low Energy")]),e._v("\nrequires that the hciDeviceId settings of both integrations are the same value.")])]),e._v(" "),s("p",[e._v("The Xiaomi Mi integration scans for Bluetooth Low Engery (BLE) advertisements from a variety of Xiaomi sensors.\nSensor readings can then be published to MQTT using the "),s("a",{attrs:{href:"./home-assistant"}},[e._v("Home Assistant integration")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("This integration has all the same requirements as the "),s("a",{attrs:{href:"./bluetooth-low-energy"}},[e._v("Bluetooth Low Energy")]),e._v(" integration.")]),e._v(" "),s("h2",{attrs:{id:"supported-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-devices"}},[e._v("#")]),e._v(" Supported devices")]),e._v(" "),s("p",[e._v("This integration has been tested with these devices:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("LYWSD02")]),e._v(" "),s("p",[e._v("(rectangular body, E-Ink, broadcasts temperature and humidity, about 20 readings per minute, no battery info)")])]),e._v(" "),s("li",[s("p",[e._v("LYWSDCGQ")]),e._v(" "),s("p",[e._v("(circular body, segment LCD, broadcasts temperature and humidity when it changes and battery level periodically)")])]),e._v(" "),s("li",[s("p",[e._v("LYWSD03MMC")]),e._v(" "),s("p",[e._v("(small square body, segment LCD, broadcasts temperature and humidity once in about 10 minutes and battery level once in an hour, advertisements are encrypted, therefore you need to set the key in your configuration, see for instructions the "),s("a",{attrs:{href:"#sensor-options"}},[e._v("bindKey")]),e._v(" option)")])])]),e._v(" "),s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("sensors")])]),e._v(" "),s("td",[s("a",{attrs:{href:"#sensor-options"}},[e._v("Sensor options")])]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("An array of sensor definitions.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("hciDeviceId")])]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",[e._v("0")])]),e._v(" "),s("td",[e._v("Bluetooth Device ID (e.g. "),s("code",[e._v("0")]),e._v(" to use "),s("code",[e._v("hci0")]),e._v(").")])])])]),e._v(" "),s("h3",{attrs:{id:"sensor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensor-options"}},[e._v("#")]),e._v(" Sensor Options")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("name")])]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("A human readable name for the sensor. Will be used in MQTT topics.")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("address")])]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("MAC address of the device ("),s("a",{attrs:{href:"#address-format"}},[e._v("Format")]),e._v(").")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("bindKey")])]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("A decryption key for sensors which send "),s("a",{attrs:{href:"#encryption"}},[e._v("encrypted data")]),e._v(".")])])])]),e._v(" "),s("h3",{attrs:{id:"address-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address-format"}},[e._v("#")]),e._v(" Address Format")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("address")]),e._v(" field is a lowercase MAC address without "),s("code",[e._v(":")]),e._v(".  This is the same format as a "),s("a",{attrs:{href:"./bluetooth-low-energy#determining-the-ids"}},[e._v("tag ID")]),e._v(" in the BLE integration. The BLE integration can also be used to log device IDs to the console.")]),e._v(" "),s("h2",{attrs:{id:"encryption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),s("p",[e._v("Some Xiaomi sensors encrypted their data (e.g. LYWSD03MMC). To be able to read the data from this sensor one needs to get a hold of the encryption key. For ways to get this key please read this "),s("a",{attrs:{href:"https://github.com/custom-components/sensor.mitemp_bt/blob/master/faq.md#my-sensors-ble-advertisements-are-encrypted-how-can-i-get-the-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("this FAQ entry"),s("OutboundLink")],1),e._v(" from the "),s("a",{attrs:{href:"https://github.com/custom-components/sensor.mitemp_bt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom-components/sensor.mitemp_bt"),s("OutboundLink")],1),e._v(" repository.  Once found, it can be set with the "),s("a",{attrs:{href:"#sensor-options"}},[e._v("bindKey")]),e._v(" option.")]),e._v(" "),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See also")]),e._v(" "),s("p",[e._v("There are many projects dedicated to these devices.  This integration has particularly benefited from these two:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/hannseman/homebridge-mi-hygrothermograph",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebridge plugin"),s("OutboundLink")],1),e._v(".  Much of the parser code came from this project.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/custom-components/sensor.mitemp_bt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mitemp_bt"),s("OutboundLink")],1),e._v(".  One of the better documented projects with extensive device support.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);