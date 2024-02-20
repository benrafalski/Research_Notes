#!/usr/bin/python3

filenames = [
    "Advent of Islam",
    "Abu Muslim revolution",
    "Abbasid caliphate",
    "Iranian intermezzo",
    "The Saffarids",
    "The Samanids",
    "The Iranian renaissance",
    "The Ghaznavids",
    "The Buyids",
    "Seljuqs",
    "Isma'iliyah",
    "Khwarezm-Shahs",
    "Mongol invasion",
    "Il-Khans",
    "Timurids",
    "Turkmen",
    "Shah Isma'il",
    "Shah Abbas I",
    "The Afghan interlude",
    "Religious Developments",
    "Nadir Shah",
    "Zand Dynasty",
    "Qajar Dynasty",
    "Fath Ali Shah",
    "Naser al-Din Shah",
    "Mozaffar al-Din Shah",
    "Constitutional revolution",
    "Anglo-Russian Entente",
    "Majles suppression",
    "Anglo-Persian Oil Company",
    "Second Majles",
    "Sheikh Fazlullah Nuri execution",
    "Majles reforms",
    "William Morgan Shuster",
    "World War I",
    "WWI End",
    "Majles rejects Anglo-Persian agreement",
    "Reza Khan coup",
    "Reza Khan becomes prime minister",
    "Reza Shah Pahlavi crowned",
    "Abolishing Foreign Treaties",
    "Oil concession revised",
    "University of Tehran",
    "Women's rights",
    "Anglo-Soviet Invasion",
    "Abdication of Reza Shah",
    "Establishment of KDPI",
    "Establishment of the Republic of Mahabad",
    "Iran-Soviet Crisis",
    "Assassination attempt on Mohammad Reza Shah",
    "Assassination of Prime Minister Razmara",
    "Nationalization of Anglo-Iranian Oil Company",
    "Mosaddeq becomes prime minister",
    "Mosaddeq resigns",
    "Mosaddeq dictator",
    "Mohammad Reza Shah dismisses Mosaddeq",
    "1953 Iranian coup (Operation Ajax)",
    "Consortium Agreement of 1954",
    "CENTO",
    "US Military aid",
    "Atoms for Peace",
    "Creation of the SAVAK",
    "Two-party Majles",
    "OPEC created",
    "Land Reform Act",
    "White revolution",
    "Khomeini arrested",
    "RCD",
    "Khomeini exiled",
    "Fedayeen Khalq and Mujahideen Khalq",
    "Tehran Nuclear Research Center",
    "NPT",
    "Iran takes Abu Musa and the Tunbs",
    "The Sale and Purchase Agreement",
    "Oil Crisis",
    "NPT Safeguard agreement",
    "Bushehr nuclear power plant",
    "Algiers Agreement",
    "Price controls",
    "National Security Decision Memorandum 324",
    "Revolutionary demonstrations begin",
    "Shah imposes martial law",
    "Khomeini forced to Paris",
    "Shah leaves Iran",
    "Khomeini takes Iran",
    "Iranian Revolution",
    "Iranian Hostage Crisis",
    "Canadian Caper",
    "Bazargan resigns as PM",
    "Iranian Islamic Constitution",
    "Bani-Sadr President",
    "Operation Eagle Claw",
    "Iran-Iraq War",
    "Khomeini releases 13 hostages",
    "Algiers Accords",
    "Iranian Offensive",
    "Haft-e Tir bombing",
    "Bani-Sadr impeached",
    "Iranian Prime Minister office bombing",
    "Mir Hossein Mousavi PM",
    "Saddam proposes ceasefire",
    "Tanker war",
    "Iran-contra affair",
    "UN Resolution 598",
    "Sex-reassignment fatwa",
    "Iran Air flight 655",
    "Iran-Iraq ceasefire",
    "Political fracture",
    "1988 Mass Executions",
    "Khomeini's death",
    "Abolishment of prime minister position",
    "Hashemi Rafsanjani president",
    "AMAD Plan",
    "Iraq-Iran restore diplomacy",
    "Withdrawing from Lebanon",
    "Founding of Kiyan",
    "Sadeqh Sharafkandi murdered",
    "Abu Musa and Tunbs negotiations",
    "Rafsanjani reelected",
    "Increased Islamic extremist support",
    "AMIA Bombing",
    "Mohammad Khatami president",
    "Montazeri House Arrest",
    "Karbaschi prosecuted and Nouri removed",
    "Salam Rushdie bounty lifted",
    "Dariush Farouhar and wife assassinated",
    "Iran student protests",
    "University of Tehran dorm raids",
    "Khatami reelected",
    "Taliban toppled",
    "Bush 'axis of evil'",
    "Nuclear Program Leak",
    "Aghajari protests",
    "Nuclear Program halted",
    "Iraq insurgency",
    "Council of Guardians mass disqualifications",
    "Council of Guardians presidential disqualifications",
    "Mohmoud Ahmadenejad President",
    "State TV and radio reforms",
    "Women allowed into sporting events",
    "UN sanctions",
    "Nuclear program escalation",
    "Ahmadinejad holocaust denialism",
    "IAEA nuclear program claims",
    "Ahmadinejad visits Iraq",
    "Majles elections and more bans",
    "Inflation issues",
    "Ahmadinejad and Obama",
    "Omid launched",
    "2009 presidential election",
    "Green Movement",
    "Ahmadinejad re-elected",
    "Uranium enrichment in Qom",
    "Expansion of IRGC",
    "Stuxnet",
    "Socio-economic development plan",
    "Karroubi and Mousavi arrested",
    "Dismissal of Heydar Moslehi",
    "Ahmadinejad tries to become minister of oil",
    "Ahmadinejad summoned by Majles",
    "Hassan Rouhani president",
    "Rouhani calls Obama",
    "Opening of nuclear talks with P5+1",
    "Saudi intervention in Yemen",
    "Joint Comprehensive Plan of Action (JCPOA)",
    "Saudis cut ties with Iran",
    "JCPOA Fulfillment",
    "2016 Majles election",
    "Rouhani reelected",
    "MBS accuse Iran of an act of war",
    "Dey Protests",
    "Iranian nuclear agreement fallout",
    "Instrument in Support of Trade Exchanges",
    "2019 Floods",
    "Rouhani breaches nuclear deal",
    "Gulf of Oman attacks",
    "Abqaiq-Khurais attack",
    "Khamenei rejects JCPOA renegotiations",
    "Bloody November",
    "Najaf consulate burned down",
    "Soleimani Assassinated",
    "Ukraine flight 752 shot down",
    "Council of Guardians mass disqualifications",
    "Attempted impeachment of Rouhani",
    "2020 Iran Explosions",
    "IRGC and Fakhrizadeh assassinations",
    "Nuclear escalation",
    "Vienna Talks Begin",
    "Ebrahim Raisi President",
    "COVID Pandemic",
    "Strengthening China ties",
    "Vienna talks resume",
    "Economic surgery",
    "Nuclear deal Vienna talks end",
    "Strengthening ties with Russia",
    "Death of Jina Mahsa Amini",
    "Amini protests",
    "Restoring relations with Saudi Arabia",
    "Gasht-e Ershad returns"
]


def make_html_history_file(filename, country):

    filecontents = f"""<!DOCTYPE html>
<html>
<head>
    <title>{filename}</title>
    <link rel="icon" type="image/x-icon" href="../../../images/Flag-{country}.webp">
    <link rel="apple-touch-icon" href="../../../images/Flag-{country}.webp">
    <link rel="stylesheet" href="../../../styles.css">
</head>

<body>
    <h2>{filename}</h2>
    <ul>
        <li></li>
    </ul>
    <span>Sources: [
        <a href="" target="_blank">1</a>
        ,
        <a href="" target="_blank">2</a>
        ,
        <a href="" target="_blank">3</a>
        ]
    </span>
    </table>

</body>
</html>
    """

    f = open(f"{filename.replace(' ', '')}.html", "w")
    f.write(filecontents)
    f.close()


# for f in filenames:
#     make_html_history_file(f, "Iran")
    


def make_list_items(filename):
    href = f"History/{filename.replace(' ', '')}.html"
    print(f"<li><a href=\"{href}\" target=\"_blank\">{filename}</a></li>")



for f in filenames:
    make_list_items(f)