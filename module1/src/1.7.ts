{
    //Spread Operator
    //Rest Operator

    const bros1: string[] = ["Mir", "sujon", "ismail"];
    const bros2: string[] = ["Abu", "Halim", "Tahsin"];

    //now push all names of bros2 into bros1 we will use spread operator
    bros1.push(...bros2);

    const mentors1 = {
        typeScript: 'shuvo',
        redux: 'hamil',
        dbms: 'mizan'
    }

    const mentors2 = {
        prisma: "firose",
        next: "tonmopy",
        cloud: "nahid"
    } 

    //now we wanna insert all mentors in the mentor list
    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    //learn rest operator
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${f1} ${f2} ${f3}`);
        friends.forEach((f: string) => console.log(`Hi ${f}`));
    }

    greetFriends("abul", "babul", "kabul");
}