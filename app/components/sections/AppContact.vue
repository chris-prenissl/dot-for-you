<script setup lang="ts">
import PhoneIcon from "~/components/icons/PhoneIcon.vue";
import AddressItem from "~/components/elements/AddressItem.vue";
import SocialItem from "~/components/icons/SocialItem.vue";
import InstagramIcon from "~/components/icons/InstagramIcon.vue";
import WhatsAppIcon from "~/components/icons/WhatsAppIcon.vue";
import WhatsAppBusinessIcon from "~/components/icons/WhatsAppBusinessIcon.vue";
import LocationIcon from "~/components/icons/LocationIcon.vue";
import EMailIcon from "~/components/icons/EMailIcon.vue";
</script>

<template>
	<section
		id="contact"
		class="m-auto flex flex-col bg-primary text-light_text z-5"
	>
		<h1 class="section-header text-text_on_primary">
			Kontakt
		</h1>
		<div class="m-auto flex flex-col justify-evenly py-2 md:py-8">
			<div class="flex flex-col items-start flex-wrap md:flex-row md:items-center m-auto px-16 py-2 md:py-16 gap-1 md:gap-6 md:justify-center">
				<SocialItem
					to="https://wa.me/c/491637917232"
					text="WhatsApp Katalog"
				>
					<WhatsAppBusinessIcon />
				</SocialItem>
				<SocialItem
					to="https://wa.me/491637917232"
					text="WhatsApp Chat"
				>
					<WhatsAppIcon />
				</SocialItem>
				<SocialItem
					to="https://www.instagram.com/dotforyou_dotpainting"
					text="DotForYou Dotpainting"
				>
					<InstagramIcon />
				</SocialItem>
				<SocialItem
					to="https://www.instagram.com/dotforyou_designs"
					text="DotForYou Designs"
				>
					<InstagramIcon />
				</SocialItem>
			</div>
			<div
				class="flex flex-col flex-wrap lg:flex-row gap-1 lg:justify-center items-start lg:items-center m-auto text-center"
			>
				<AddressItem
					to="tel:+491637917232"
					text="+49 163 791 72 32"
				>
					<PhoneIcon />
				</AddressItem>
				<AddressItem
					to="mailto:dotforyou@gmx.de"
					text="dotforyou@gmx.de"
				>
					<EMailIcon />
				</AddressItem>
				<AddressItem
					to="https://maps.apple.com/?address=Augustenstra%C3%9Fe%2020,%2093133%20Burglengenfeld,%20Deutschland&ll=49.205873,12.053873"
					text="93133 Burglengenfeld, Augustenstraße 20"
				>
					<LocationIcon />
				</AddressItem>
			</div>
			<div class="m-auto py-8 text-center">
				<h2 class="text-xl text-gray-900">
					Abonniere den
					<NuxtLink
						to="https://whatsapp.com/channel/0029VbBoRJS0QeakqLmof22Q"
						target="_blank"
						class="underline"
					>
						Whatsappkanal
					</NuxtLink>
				</h2>
				<p class="mt-2">
					Erfahre immer von den neuesten Kollektionen und exklusivsten Angeboten.
				</p>
			</div>
		</div>
	</section>
</template>
