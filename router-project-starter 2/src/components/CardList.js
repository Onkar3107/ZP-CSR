import React from "react";
import Card from "./Card";

const data = [
  {
    district: "सांगली",
    village: "Kumbhari ",
    taluka: "जत",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशु वैद्यकीय दवाखाना श्रेणी 1 कुंभारी",
    buildingType: "स्व मालकी",
    solarCapacity: "2kW",
    contactPerson: "Dr suhas salgar ",
    notes: null,
  },
  {
    district: "सांगली",
    village: "सोन्याळ ",
    taluka: "जत",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुवैद्यकीय दवाखाना श्रेणी १ सोन्याळ ",
    buildingType: "स्व मालकी",
    solarCapacity: "4kW",
    contactPerson: "डॉ. स्वप्निल सोनार 9420933169",
    notes: null,
  },
  {
    district: "सांगली",
    village: "जत",
    taluka: "जत",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुैद्यकीय दवाखाना श्रेणी १ जत ",
    buildingType: "स्व मालकी",
    solarCapacity: "4kW",
    contactPerson: "डॉ. स्वप्निल सोनार 9420933169",
    notes: null,
  },
  {
    district: "सांगली",
    village: "करमाळे",
    taluka: "शिराळा",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुवैद्यकीय दवाखाना श्रेणी 2 करमाळे",
    buildingType: "स्व मालकी",
    solarCapacity: "5kW",
    contactPerson: "श्री.सुभाष थोरात 9975289975",
    notes: "-",
  },
  {
    district: "सांगली",
    village: "Soni",
    taluka: "मिरज",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "Veterinary Dispensary Gr 1 Soni",
    buildingType: "स्व मालकी",
    solarCapacity: "2kW",
    contactPerson: "Dr. Suhas Gondkar 9881912551",
    notes: null,
  },
  {
    district: "सांगली",
    village: "Takave ",
    taluka: "शिराळा",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुवैद्यकीय दवाखाना श्रेणी 1 टाकवे ",
    buildingType: "स्व मालकी",
    solarCapacity: "10kW",
    contactPerson: "Dr.kiran babaso Sisal ",
    notes: "Ok",
  },
  {
    district: "सांगली",
    village: "Panumbre warun ",
    taluka: "शिराळा",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुवैद्यकीय दवाखाना श्रेणी 2",
    buildingType: "स्व मालकी",
    solarCapacity: "3kW",
    contactPerson: "मुसा दस्तगीर मुल्ला पशुधन पर्यवेक्षक 9921426667",
    notes: "सोलर वॉटर हिटर व सोलर लाईट सिस्टीम आवश्यक",
  },
  {
    district: "सांगली",
    village: "Bhalawani",
    taluka: "खानापूर",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुवैद्यकीय दवाखाना श्रेणी एक भाळवणी ",
    buildingType: "स्व मालकी",
    solarCapacity: "3kW",
    contactPerson: "Vasant popat yadav 9373006825",
    notes: "Good quality material ",
  },
  {
    district: "सांगली",
    village: "शिरशी ",
    taluka: "शिराळा",
    institutionType: "पशु वैद्यकीय दवाखाना",
    institutionName: "पशुवैद्यकीय दवाखाना शिरशी ",
    buildingType: "स्व मालकी",
    solarCapacity: "3kW",
    contactPerson: "मुकुंद बाळासाहेब वाटेगावकर 9822257097",
    notes: "सोलर वॉटर हीटर आणि सोलर लाईट ",
  }
];

const CardList = () => {
  return (
    <div className="bg-gray-950 min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
