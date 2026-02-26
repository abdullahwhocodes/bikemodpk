def populate_page(filename, title, bikes_data):
    with open('empty-state-template.html', 'r', encoding='utf-8') as f:
        template = f.read()
    
    bike_sections = ''
    for bike in bikes_data:
        # Use adaptive light/dark mode classes
        # bg-[#f9fafb] dark:bg-zinc-950
        # text-gray-600 dark:text-gray-400
        # border-gray-200 dark:border-zinc-900
        bike_sections += f'''
    <section id="{bike['id']}" class="py-20 px-5 md:px-20 bg-[#f9fafb] dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900">
        <h2 class="font-header text-3xl mb-10 border-b border-red-600 pb-2 inline-block">{bike['number']}. {bike['name']}</h2>

        <div class="slider-container rounded-2xl cursor-ew-resize">
            <div class="before-img">
                <img src="{bike['before_img']}" alt="{bike['name']} Stock" draggable="false" style="{bike.get('style', '')}">
            </div>
            <div class="after-img">
                <div class="after-img-inner">
                    <img src="{bike['after_img']}" alt="{bike['name']} Modified" draggable="false" style="{bike.get('style', '')}">
                </div>
            </div>
            <div class="stock-info-label">Stock vs Modified</div>
        </div>

        <div class="max-w-3xl mt-16">
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed italic">
                {bike['desc']}
            </p>
            <button onclick="window.location.href='{bike['details_url']}'" class="witness-btn font-header active:scale-95">
                <span class="btn-text-primary text-lg md:text-xl">
                    WITNESS {bike['name'].split(' ')[-1]}
                </span>
                <span class="btn-text-hover font-inter">
                    INSPECT THE MODS
                </span>
            </button>
        </div>
    </section>
'''
    
    main_start = '<main class="empty-state-section">'
    main_end = '</main>'
    
    start_idx = template.find(main_start)
    end_idx = template.find(main_end) + len(main_end)
    
    # Replace content and title
    content = template[:start_idx] + bike_sections + template[end_idx:]
    content = content.replace('{{TITLE}}', title)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

# Data for bikes
war_rig = {
    'id': 'war-rig',
    'number': '1',
    'name': '𝐖𝐀𝐑 𝐑𝐈𝐆',
    'before_img': 'images/Before4.jpeg',
    'after_img': 'images/After4.png',
    'desc': "No plastic, no pretense, just raw iron and grit. We took the soul of a stallion and the armor of a warrior to create a machine that’s as comfortable in the mud as it is in the wasteland. It’s a 'Built Not Bought' masterpiece that proves some breeds are just born for war...",
    'details_url': 'war-rig-details.html'
}

salty = {
    'id': 'salty',
    'number': '1',
    'name': '𝐒𝐀𝐋𝐓𝐘',
    'before_img': 'images/before 3.jpeg',
    'after_img': 'images/after 3.png',
    'desc': 'Introducing "Salty", a masterpiece of minimalist engineering and vintage-inspired aesthetics. This custom cafe racer is a tribute to the "Less is More" philosophy, featuring a stripped-back frame that highlights its raw mechanical beauty. With its signature matte black finish and a precision-fitted SC Project exhaust, Salty doesn\'t just ride—it roars.',
    'details_url': 'salty-details.html',
    'style': 'object-position: center 75%;'
}

blood_baron = {
    'id': 'blood-baron',
    'number': '1',
    'name': '𝐁𝐋𝐎𝐎𝐃 𝐁𝐀𝐑𝐎𝐍',
    'before_img': 'images/before2.jpeg',
    'after_img': 'images/after2.jpeg',
    'desc': "From the aggressive clip-on posture to the balanced weight distribution of those oversized tires, every inch of 'The Blood Baron' was calculated. The challenge was to blend the dark aesthetic of a Cafe Racer with the ruggedness of a Brat. The result? A crimson-crowned predator that handles as sharp as it looks. No mudguards to hide the craft, just pure, unadulterated engineering...",
    'details_url': 'blood-baron-details.html',
    'style': 'object-position: center 90%;'
}

dementor = {
    'id': 'dementor',
    'number': '2',
    'name': '𝐃𝐄𝐌𝐄𝐍𝐓𝐎𝐑',
    'before_img': 'images/Before.jpeg',
    'after_img': 'images/after.jpg',
    'desc': "Dementor isn't just a machine; it's a statement. With a sharp tail-cut and jaw-dropping aesthetics, its SC Project exhaust roars like a beast. The custom headlight and meter glow with pure attitude, while the wrap is so clean it’s a work of art. Built to dominate with an engine guard for added muscle and king-like comfort, Dementor is beautifully modified and untouchable in style—standing far above everything else on the road.",
    'details_url': 'dementor-details.html'
}

# Populate pages
populate_page('scramblers.html', 'Scramblers', [war_rig])
populate_page('honda.html', 'Honda', [war_rig, salty])

# Adjust numbers for cafe racers and suzuki
salty_cafe = salty.copy()
salty_cafe['number'] = '1'
blood_baron_cafe = blood_baron.copy()
blood_baron_cafe['number'] = '2'
dementor_cafe = dementor.copy()
dementor_cafe['number'] = '3'

populate_page('cafe-racers.html', 'Cafe Racers', [salty_cafe, blood_baron_cafe, dementor_cafe])

blood_baron_suzuki = blood_baron.copy()
blood_baron_suzuki['number'] = '1'
dementor_suzuki = dementor.copy()
dementor_suzuki['number'] = '2'

populate_page('suzuki.html', 'Suzuki', [blood_baron_suzuki, dementor_suzuki])

print("Pages populated successfully with light mode fixes!")
