class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="bg-white dark:bg-[#0a0a0a] text-[#4b5563] dark:text-[#ccc] py-16 px-6 md:px-12 font-sans border-t border-gray-200 dark:border-zinc-900">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto text-left">
            <!-- About Column -->
            <div>
                <h4 class="text-[#111827] dark:text-white"
                    style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">About</h4>
                <div class="bg-gray-200 dark:bg-[#444]" style="width: 50px; height: 1px; margin-bottom: 20px;"></div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                    <li><a href="about.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">About</a>
                    </li>
                    <li><a href="advertising.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Advertising</a>
                    </li>
                    <li><a href="submit.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Submit</a>
                    </li>
                    <li><a href="contact.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Contact</a>
                    </li>
                    <li><a href="team.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Team</a>
                    </li>
                    <li><a href="privacy.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Privacy
                            Policy</a></li>
                </ul>
            </div>

            <!-- Categories Column -->
            <div>
                <h4 class="text-[#111827] dark:text-white"
                    style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Categories</h4>
                <div class="bg-gray-200 dark:bg-[#444]" style="width: 50px; height: 1px; margin-bottom: 20px;"></div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                    <li><a href="cafe-racers.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Cafe
                            Racers</a></li>
                    <li><a href="trackers.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Trackers</a>
                    </li>
                    <li><a href="bobbers.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Bobbers</a>
                    </li>
                    <li><a href="choppers.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Choppers</a>
                    </li>
                    <li><a href="classics.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Classics</a>
                    </li>
                    <li><a href="scramblers.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Scramblers</a>
                    </li>
                </ul>
            </div>

            <!-- Brands Column -->
            <div>
                <h4 class="text-[#111827] dark:text-white"
                    style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Brands</h4>
                <div class="bg-gray-200 dark:bg-[#444]" style="width: 50px; height: 1px; margin-bottom: 20px;"></div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                    <li><a href="honda.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Honda</a>
                    </li>
                    <li><a href="suzuki.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Suzuki</a>
                    </li>
                    <li><a href="hi-speed.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Hi
                            Speed</a></li>
                    <li><a href="yamaha.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Yamaha</a>
                    </li>
                    <li><a href="kawasaki.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Kawasaki</a>
                    </li>
                    <li><a href="crown-lifan.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Crown
                            Lifan</a></li>
                    <li><a href="ravi.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Ravi</a>
                    </li>
                    <li><a href="harley-davidson.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Harley-Davidson</a>
                    </li>
                    <li><a href="bmw.html"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">BMW</a>
                    </li>
                </ul>
            </div>

            <!-- Follow Us Column -->
            <div>
                <h4 class="text-[#111827] dark:text-white"
                    style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Follow Us</h4>
                <div class="bg-gray-200 dark:bg-[#444]" style="width: 50px; height: 1px; margin-bottom: 20px;"></div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                    <li><a href="#"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Instagram</a>
                    </li>
                    <li><a href="#"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">Facebook</a>
                    </li>
                    <li><a href="#"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">YouTube</a>
                    </li>
                    <li><a href="#"
                            class="text-gray-600 dark:text-[#ccc] no-underline text-[0.85rem] transition-colors hover:text-[#dc2626]">TikTok</a>
                    </li>
                </ul>
            </div>
        </div>

        <div
            style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #222; font-size: 0.7rem; color: #555; letter-spacing: 0.15em; text-transform: uppercase;">
            Built for the 1% who build. © 2026 BIKEMODPK
        </div>
    </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
