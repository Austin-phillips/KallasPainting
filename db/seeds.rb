@project_id = 0

5.times do 
  @project_id += 1
  Project.create(
    title: Faker::FamilyGuy.character,
    description: Faker::FamilyGuy.quote,
    public: Faker::Finance.credit_card
  )
  5.times do 
    Image.create(
      project_id: @project_id,
      public: Faker::Finance.credit_card
    )
  end 
    
end 

puts 'Finished Seeding'