
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {Header} from "./header/header";
import {Main} from "./main/main";
import {Footer} from "./footer/footer";
import { Home } from "./home/home";



@Component(
  selector: 'app-root',
  imports: [RouterOutlet,  RouterLink, RouterLinkActive],
)


