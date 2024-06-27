# Roadmaps In Burmese

**Roadmaps In Burmese** ရည်ရွယ်ချက်က  မြန်မာလိုရေးထားတဲ့ content တွေကို roadmap တစ်ခုလို structure ချပြီးစုစည်းပေးချင်တာပါ.

## How it works?

### Overview
**Roadmaps In Burmese** က folder structure  ကနေပြီးတော့ interactive roadmap UI ထုတ်ပေးတဲ့  project  ဖြစ်ပါတယ်။ html, css, js ကိုသုံးထားပြီးတော့ နောက်ကွယ်က အလုပ်လုပ်ပေးနေတဲ့ server  မရှိပါဘူး။ 

### Key Components
- **gulpfile.js** gulp  ကိုသုံးပြီး folders.json ကို generate ထုတ်လိုက်ပါတယ်။ 
- **index.html**,**details.html** က folders.json  ကိုသုံးပြီး topics တွေ steps တွေကိုပြန်ပြပေးလိုက်ပါတယ်။

## Installation

1. **Repo ကို clone လိုက်ပါ**

   ```
   git clone https://github.com/your-username/roadmaps-in-burmese.git
   cd roadmaps-in-burmese
   ```

2. **ဒီ command ကိုရိုက်ပြီး folders.json ကို generate လိုက်ပါ**

   ```
   npx gulp
   ```

## Usage

index.html ကို http server တစ်ခုခုနဲ့ဖွင့်ကြည့်လိုက်ရင်ရပါပြီ။ ဥပမာ: vs-code ရဲ့ live server extension တို့လို

## Contributing

Contribute  လုပ်ချင်တဲ့သူအကုန်လုံးကိုကြိုဆိုပါတယ်။ topic အသစ်တွေ steps အသစ်တွေ မျှ၀ေချင်တဲ့သူတွေကိုအထူးကြိုဆိုပါတယ်

1. Fork the repository.

2. Create a new branch: `git checkout -b new-topic`.
3. Add your topic or steps.
4. Commit your changes: `git commit -m 'Add new topic'`.
5. Push to the branch: `git push origin new-topic`.
6. Open a pull request.

### Adding New Topics
1. topics ဆိုတဲ့ folder အောက်မှာ ကိုယ် create ချင်တဲ့ topic နံမည်နဲ့ folder တစ်ခုဆောက်မယ်
2. ကိုယ် create လိုက်တဲ့ folder ထဲမှာ author.md ဆိုတဲ့ file ကို create မယ်။  author.md ထဲမှာ  ကိုယ့် profile information ကို markdown format နဲ့ထည့်မယ်
အဲ့ဒီ 2 ခုက မဖြစ်မနေလုပ်ရပါမယ်။ 

ဒီနောက်ဆုံးအဆင့်က optional ပါ။
3. ကိုယ် create လိုက်တဲ့ folder ထဲမှာ content.md ဆိုတဲ့ file ကို create မယ်။ content.md ထဲမှာ ကိုယ့် profile information ကို markdown format နဲ့ထည့်မယ်

### Adding New Steps
1. folder name ရဲ့အရှေ့မှာ step နံပတ်ကို prefix ထည့်ပေးရမယ်။ step 1 ဆိုရင် 1_folder_name လို့ထည့်ရင်ရပါပြီ။ 01_folder_name လို့ထည့်စရာမလိုပါဘူး။ 
2. steps တွေက nested ဖြစ်ချင်သလောက်ဖြစ်လို့ရပါတယ်။ 

အပေါ်က အဆင့် ၂ ဆင့်ကလွဲပြီး ကျန်တာက Topic အသစ်ထည့်တာနဲ့အားလုံးတူတူပါပဲ။ 

## License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, contact us at [zawhtetnaing006@gmail.com].

## Acknowledgments
This project is heavily inspired by [roadmap.sh](https://roadmap.sh/). Special thanks to the creators and contributors of roadmap.sh for their amazing work.

---

Thank you for your interest in **Roadmaps In Burmese**!