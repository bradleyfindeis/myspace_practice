10.times do
   user = User.create(
    name: Faker::Seinfeld.character,
    image: Faker::Avatar.image,
    email: Faker::Internet.email,
    password: 'password'

  )
  5.times do 
   user.posts.create(
      body: Faker::Hipster.sentence,
      title: Faker::ChuckNorris.fact,
    )
  end 
end
