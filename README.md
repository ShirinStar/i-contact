# i-contact
link: https://i-contact.surge.sh/

## project description 
In times, where our communication means changed and affected the way we connect with each other. i-contact is a web mobile app that matches users for immediate human eye contact.

## user story
Once the users are logged in they can fire a request to locate a near-by "eye" ( => another user that is searching at the same time for eye contact). The app matches between two users based on their location and suggests a direction for a meet point between them. Once they meet, they are invited to share one minute of human eye contact. Each user can "rate" the encounter as a way to encourage a community-growth app and a feeling of security. Other than "rating" and name the users are not required to provide any other personal information about themselves. The registration process will request an email as well but only for identification needs.


![gif](https://i.imgur.com/GFUaAfg.gif)

## Technologies to be used
React with ruby on Rails, Google maps API, Websocket, Actioncable

## ERD
![has_many](https://i.imgur.com/l74vldb.jpg)

## Wireframes
![all_wireframes](https://i.imgur.com/rh17kgX.jpg)

## M.V.P
- connecting at leat two users together (broadcasting).
- calculating the distance between them
- suggesting it as a meeting place.

## post M.V.P
- timing one-minute encounter- aiming to have a unique screen color to each match- so they can identify themselves.
- JS animations.
- working on a more community rating network. 
- more interactions. 

## Code Snippet
Inside my map component I'm pulling the geolocation using 'google-maps-react' npm package, within my componenttDidMount. This I'm setting inside an anonymous setIntervak function to update user location every 10 sec, which i'm sending to my location_controller using axios call.  
```
  componentDidMount() {
      const interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            //sending my geo to the backend
            const data = userLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude},
              this.props.currentUser.id)
          },
          error => console.log(error)
        );
      }, 10000)
      this.setState({
        geoInterval: interval
    })
  }
```
in the location controller I'm checking whether the location I'm receiving is from a new user, in that case I'm creating a new location, or either from an existing user, which in that case I'm updating their location. 
```
def create
  user = User.find(params[:user_id])
  location = Location.where(user_id: user)
  if location.length > 0
    Location.update(location.last.id, location_params)
      ActionCable.server.broadcast 'locations_channel',
       lat: location.last.lat,
       lng: location.last.lng,
       user: location.last.user
       render json: @location, status: :ok
     head :ok
 else
   location = Location.new(location_params)
   user.locations << location
      ActionCable.server.broadcast 'locations_channel',
       lat: location.lat,
       lng: location.lng,
       user: location.user
       render json: @location, status: :ok
     head :ok
   end
 end
```

## thank you
Huge thanks to Drake Talley, David Whitlatch, Brian Flynn, Jason Karlin and my wonderful friends from General Assembly! ❤️ 
