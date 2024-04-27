use dep::std;

fn main(x: Field, y: pub Field) {
    std::println(x);
}

// fn main(age: u32, birth_year: Field, age_hash: pub Field) {
//     assert(2024 - age == birth_year as u32);
//     assert(age >= 21);

//     // Check integrity of birth year hash
//     let computed_hash = std::hash::pedersen_commitment([birth_year]);
//     assert(computed_hash.x == age_hash);
// }

// #[test]
// fn test_main() {
//     let birth_hash = std::hash::pedersen_hash(["Mayowa" as Field, "2000" as Field, "askdhgahsgdhkasd" as Field]);
//     std::println(birth_hash);
//     // main(24, 2000, birth_hash.x);
// }

// fn main(name: Field, nationality: Field, kyc_id: Field, kyc_hash: pub Field) {
//     let computed_hash = std::hash::pedersen_commitment([name, nationality, kyc_id]);
//     assert(computed_hash.x == kyc_hash);
// }

// #[test]
// fn test_main() {}
