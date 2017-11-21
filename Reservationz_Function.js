function ReservationInfo()  
    {
        var first, last, traveler, days, costTotal, costTravel, costHotel, costMeal, costExtra;
        var numberinString = 0;
        var txtinString = " ";
        var cityCost = 0;
        var city = " ";
        var hotelCost = 0;
        var hotel = " ";
        var mealCost = 0;
        var mealPick = " ";
        
        first = document.resinfo.firstName.value;
        last = document.resinfo.lastName.value;
        traveler = document.resinfo.numTravelers.value;
        days = document.resinfo.numDays.value;

        if (document.resinfo.destination[0].checked) 
            {
                city = city + "You have selected St. Louis as your destination.";
                cityCost = cityCost + 40;
            }

		else if (document.resinfo.destination[1].checked) 
            {
                city = city + "You have selected Milwaukee as your destination.";
                cityCost = cityCost + 20;
            }
        
		else if (document.resinfo.destination[2].checked)
            {
                city = city + "You have selected Detroit as your destination.";
                cityCost = cityCost + 35;
            }



		if (document.resinfo.hotel[0].checked)
            {
                hotel = hotel + "You are staying in an Economy hotel.";
                hotelCost = hotelCost + 50;
            }
        
		else if (document.resinfo.hotel[1].checked)
            {
                hotel = hotel + "You are staying in a Standard hotel.";
                hotelCost = hotelCost + 70;
            }
        
		else if (document.resinfo.hotel[2].checked)
            {
                hotel = hotel + "You are staying in a Upscale hotel.";
                hotelCost = hotelCost + 120;
            }



		if (document.resinfo.meal[0].checked)
            {
               mealPick = mealPick + " ";
                mealCost = mealCost;
            }

		else if (document.resinfo.meal[1].checked)
            {
               mealPick = mealPick + "You have selected a snack as your meal choice.";
                mealCost = mealCost + 5;
            }

		else if (document.resinfo.meal[2].checked)
            {
                mealPick = mealPick + "You have selected a full meal for your meal choice.";
               mealCost = mealCost + 10;
            }


	
		if (document.resinfo.Wifi.checked)
            {
                txtinString = txtinString + "You requested WiFi.";
                numberinString = numberinString + 10;
            }
        
		if (document.resinfo.Recline.checked)
            {
                txtinString = txtinString + "You requested a fully-reclining seat.";
                numberinString = numberinString + 20;
            }

		costTotal = ((cityCost * traveler * 1) + (hotelCost * days * 1) + (mealCost * traveler * 1) + (numberinString * traveler * 1));

		document.getElementById("p1").innerHTML = ("Thank you " + first + " " + last + "! " + city + " " + hotel + " " + mealPick + " " + txtinString + " Your total cost will be $" + costTotal + ".");
    }