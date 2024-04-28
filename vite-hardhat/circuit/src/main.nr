use dep::std;

// fn main(x: Field, y: pub Field) {
//     std::println(x);
//     assert(x != y);
// }

// fn main(age: u32, birth_year: Field, age_hash: pub Field) {
//     assert(2024 - age == birth_year as u32);
//     assert(age >= 21);

//     // Check integrity of birth year hash
//     let computed_hash = std::hash::pedersen_commitment([birth_year]);
//     assert(computed_hash.x == age_hash);
// }

#[test]
fn test_main() {
    // let name = "josh".as_bytes();
    // let country = "country".as_bytes();
    // let id = 1000;
    // let birth_hash = std::hash::pedersen_hash([name[0], country[0]]);
    // let birth_hash = std::hash::pedersen_commitment([3000, 2000]);
    let birth_hash = std::hash::pedersen_commitment(
        [0x4d61796f7761204f6269736573616e, 0x4e6967657269616e, 0x6173646a6e6b73616a646e6b6a736e6b6a646173]
    );
    std::println(birth_hash);
    // main(24, 2000, birth_hash.x);
}

fn main(name: Field, nationality: Field, kyc_id: Field, kyc_hash: pub Field) {
    // let computed_hash = std::hash::pedersen_commitment([name, nationality, kyc_id]);
    let computed_hash = std::hash::pedersen_commitment([name, nationality, kyc_id]);
    assert(computed_hash.x == kyc_hash);
}

// 0x2c4d468b9c3fb3227ab432be9c15ca276c861ac7faeb96d1be98c8321957f0ea
// 0x0bcbb414d02f7d190efc75b7b116c500a3c98f1a80f9e0c6dff89594f3b5556d
// #[test]
// fn test_main() {}
