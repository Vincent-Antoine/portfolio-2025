<section class="px-4 sm:px-8 py-12 vc_section" id="contact">
      <section class="bg-black text-white rounded-[50px]">
        <div
          class="flex flex-col px-8 py-12 md:flex-row justify-between"
        >
          <!-- Formulaire -->
          <div class="flex-1">
<h2 class="text-2xl md:text-8xl font-bold mb-8">ME CONTACTER</h2>
            <form
              id="contact-form"

              class="space-y-6 max-w-xl my-12"
              action="send-mail.php"
              method="POST"
            >
              <div>
                <input
                  class="text-sm w-full bg-transparent border-b border-white focus:outline-none vc_placeholder::text-white"
                  id="email"
                  name="email"
                  required
                  placeholder="Votre email"
                  type="email"
                />
              </div>
              <div>
                <textarea
                  class="text-sm w-full bg-transparent border-b border-white focus:outline-none vc_placeholder::text-white"
                  id="message"
                  name="message"
                  required
                  placeholder="Votre message"
                  rows="4"
                ></textarea>
              </div>
              <div>
  <label class="text-sm flex items-start gap-2">
    <input type="checkbox" name="rgpd" required class="mt-1" />
    <span>
      J’accepte que mes données soient utilisées uniquement pour être contacté. Aucune donnée n’est conservée après traitement.
    </span>
  </label>
</div>

              <button
                class="border border-white px-6 py-2 uppercase hover:bg-white hover:text-black transition"
                type="submit"
              >
                Envoyer
              </button>
            </form>
            <div id="form-message" class="text-sm mt-4"></div>

          </div>
          <!-- Navigation droite -->
        <div class="flex flex-row md:flex-col items-end justify-between text-right flex-wrap">
            <nav class="space-y-2 text-sm uppercase flex flex-col nav-footer">
              <a class="nav-link" href="#about">À propos</a>
              <a class="nav-link" href="#realisations">Réalisations</a>
              <a class="nav-link" href="#experiences">Expériences</a>
              <a class="nav-link" href="#projets">Projets</a>
              <a class="nav-link" href="#temoignages">Témoignages</a>
            </nav>
            <!-- Réseaux sociaux -->
          </div>
        </div>
        <div
          class="mx-12 pb-12 border-t border-white pt-4 text-sm text-center md:text-left"
        >
          2025 – Vincent-Antoine Comparato. Tous droits réservés. SIRET : 898
          019 351 00019
        </div>
      </section>
    </section>