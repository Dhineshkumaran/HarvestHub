import requests

def get_city(latitude, longitude):
    api_key = "3bf457a72550477e98a9dad1159578c1"  # Replace this with your actual API key from OpenCage
    url = f"https://api.opencagedata.com/geocode/v1/json?key={api_key}&q={latitude},{longitude}&pretty=1&no_annotations=1"

    response = requests.get(url)
    data = response.json()

    if 'results' in data and len(data['results']) > 0:
        first_result = data['results'][0]  # Corrected this line
        components = first_result.get("components", {})
        print(components)
        city = components.get("state_district", "City not found")
        return city
    else:
        return "Location not found"

latitude = 11.1053998
longitude = 77.7385006

city = get_city(latitude, longitude)
print(city)
