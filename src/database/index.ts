import { createConnection } from 'typeorm';
// import { User } from "../entities/User"
// import { Team } from "../entities/Team"

export const connectDB = async () => {
    createConnection().then(async _connection => {


        // const team1 = new Team();
        // team1.name = "Hanoi #1";
        // team1.location = "Hanoi";
        // team1.description = "Hanoi rookies with small reputation on the street"
        // await connection.manager.save(team1);

        // const team2 = new Team();
        // team2.name = "Hanoi #2";
        // team2.location = "Hanoi";
        // team2.description = "Hanoi pros with big reputation on the street"
        // await connection.manager.save(team2);

        // const user1 = new User();
        // user1.name = "Bekky";
        // user1.age = 25;
        // user1.phoneNumber = "+84 978612521";
        // user1.teams = [team1, team2];
        // await connection.manager.save(user1);

        // const user2 = new User();
        // user2.name = "Q";
        // user2.age = 25;
        // user2.teams = [team1];
        // await connection.manager.save(user2);

        // const user3 = new User();
        // user3.name = "Khanh";
        // user3.age = 25;
        // user3.phoneNumber = "+84 780290093";
        // user3.teams = [team2];
        // await connection.manager.save(user3);



    }).catch(error => console.log(error));

};