// import Image from "next/image";
// import { useState } from "react";
// import { eventsItems } from "@/constants";
// import { AnimatePresence, motion } from "framer-motion";
// import { RoundButton } from "@/components";


// interface Event {
// 	title: string;
// 	date: string;
// 	time: string;
// 	location: string;
// 	description: string;
// 	image?: string;
//   }
  
//   const Calendar = () => {
// 	const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
// 	const events = {
// 	  "WEDNESDAY 15. FEBRUARY": [
// 		{
// 		  title: "Collegium Hungaricum Berlin",
// 		  date: "15 February 2023",
// 		  time: "18:00",
// 		  location: "Berlin",
// 		  description: "Details about Collegium Hungaricum Berlin",
// 		  image: "#"
// 		}
// 	  ],
// 	  "THURSDAY 23. FEBRUARY": [
// 		{
// 		  title: "Thomas Höpker",
// 		  time: "19-22 h",
// 		  location: "f3 - freiraum für fotografie",
// 		  description: "Opening / Vernissage",
// 		  image: "#",
// 		  date: "23 February 2023"

// 		},
// 		{
// 		  title: "Anett Stuth",
// 		  time: "19-22 h",
// 		  location: "Künstlerhaus Bethanien",
// 		  description: "In her new works with the overarching title TIME LOOPS, Anett Stuth photographs, collages and decollages natural artifacts, plant and animal objects and remains from the recent and prehistoric past.",
// 		  image: "#",
// 		  date: "23 February 2023"
// 		}
// 	  ]
// 	};
  
// 	return (
// 	  <div className="flex flex-row w-full min-h-screen bg-white">
// 		{/* Left Event Details Panel */}
// 		<div className="w-1/3 border-r border-[#21212155] p-8">
// 		  {selectedEvent ? (
// 			<div className="space-y-8">
// 			  {selectedEvent.image && (
// 				<div className="aspect-[4/3] relative overflow-hidden">
// 				  <img
// 					src={selectedEvent.image}
// 					alt={selectedEvent.title}
// 					className="w-full h-full object-cover"
// 				  />
// 				</div>
// 			  )}
// 			  <div className="space-y-6">
// 				<h2 className="text-2xl uppercase">
// 				  Opening / Vernissage
// 				</h2>
// 				<div className="space-y-1">
// 				  <p className="uppercase text-lg">
// 					{selectedEvent.date}
// 				  </p>
// 				  <p className="uppercase text-lg">
// 					{selectedEvent.time}:
// 				  </p>
// 				  <p className="uppercase text-lg">
// 					{selectedEvent.location}
// 				  </p>
// 				  <p className="uppercase text-lg">
// 					{selectedEvent.title}
// 				  </p>
// 				</div>
// 				<p className="text-base leading-relaxed">
// 				  {selectedEvent.description}
// 				</p>
// 				<button className="w-full bg-black text-white py-3 uppercase text-sm">
// 				  To the event
// 				</button>
// 			  </div>
// 			</div>
// 		  ) : (
// 			<div className="h-full flex items-center justify-center">
// 			  <p className="text-gray-500">Select an event to view details</p>
// 			</div>
// 		  )}
// 		</div>
  
// 		{/* Right Calendar List */}
// 		<div className="w-2/3 p-8">
// 		  <div className="flex justify-end mb-8">
// 			<button className="text-gray-600 uppercase flex items-center gap-2">
// 			  Filter ↓
// 			</button>
// 		  </div>
  
// 		  {Object.entries(events).map(([date, dateEvents]) => (
// 			<div key={date} className="mb-8">
// 			  <div className="border-y border-black py-3">
// 				<h3 className="text-base font-normal">{date}</h3>
// 			  </div>
			  
// 			  {dateEvents.map((event, index) => (
// 				<div 
// 				  key={index}
// 				  onClick={() => setSelectedEvent(event)}
// 				  className="border-b border-[#21212155] last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors"
// 				>
// 				  <div className="grid grid-cols-[120px_1fr] gap-8 py-4">
// 					<div className="text-sm">
// 					  {event.time}
// 					</div>
// 					<div className="space-y-1">
// 					  {/* <div className="text-sm">Opening / Vernissage</div> */}
// 					  <div className="text-sm font-medium">{event.title}</div>
// 					  <div className="text-sm text-gray-600">{event.location}</div>
// 					</div>
// 				  </div>
// 				</div>
// 			  ))}
// 			</div>
// 		  ))}
// 		</div>
// 	  </div>
// 	);
//   };
  
//   export default Calendar;


export default function Calender() {
	return (
		<div>
			<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&mode=AGENDA&src=YWljbHViLm5ldUBnbWFpbC5jb20&src=MDJlNGI3OGQ4Zjg2MjFkY2FmOGRjODkyYTc5ODcxM2RiZDAwOTE5ZWZjNDYwN2ZhNzYyYzcwYTZhNjZmMjI5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=N2JiOThmNjc1NjJmOTk2YzcwZTcxMDczZmRkZDJmYzBkNjc2NWU2M2RiMjFmYjE3ZWM3ZGRmNjFmNDBhYTFjM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZWMyOWIwNzViZTQzZjUwOTkxN2Y0ZmE1MGE3ODUyNzkxYTIyZWUxMDNhZDQ4ZGJmZDNlOWMyNTA1ZTk0MzVjY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODIyOGJlZDY2OTc2OWFjZWI0NGQzM2EzNGEwODI3Y2Y3YTJhMzRkYmUwMWViYzkwODBkNzMyM2ExM2IxMDhmNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23D50000&color=%230B8043&color=%23F09300&color=%237CB342" style={{ border: "solid 1px #777", margin:"0 10% 10% 20%" }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
		</div>
	)
}