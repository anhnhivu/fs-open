# Data for Countries

**2.12*.** Show the countries corresponded to the search bar.

The API [https://restcountries.eu](https://restcountries.eu/) provides data for different countries in a machine-readable format, a so-called REST API.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

![fullstack content](https://fullstackopen.com/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/5a190/19b1.png)

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

![fullstack content](https://fullstackopen.com/static/1d4ebf199806ccfe0df529c08e2a0c6d/5a190/19b2.png)

When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown:

![fullstack content](https://fullstackopen.com/static/1d4bba516fb538c5214f37c4a2ab0f8e/5a190/19b3.png)

**2.13*.** Add a `show` button next to the countries, which when pressed shows the view for that country.

**2.14*.** Show the weather report for the country. **Not Completed**.

Get the providers of weather data's website API to display the current weather report.

