cmake_minimum_required(VERSION 3.0.2 FATAL_ERROR)

project(Hamza VERSION 0.0.1 LANGUAGES C)

set(HAMZA_VERSION_MAJOR 1)
set(HAMZA_VERSION_MINOR 0)
set(HAMZA_VERSION_PATCH 0)
set(HAMZA_VERSION_STRING ${HAMZA_VERSION_MAJOR}.${HAMZA_VERSION_MINOR}.${HAMZA_VERSION_PATCH})

option(HAMZA_BUILD_SHARED "Build Hamza as a shared library" OFF)

set(CMAKE_C_STANDARD 90)

if (CMAKE_C_COMPILER_ID STREQUAL "GNU")
    set(CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} --std=c89 -m64 -O0 -g -g3 -ggdb -pedantic")
    set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS_RELEASE} --std=c89 -m64 -O3 -Ofast -pedantic")
endif ()

set(HAMZA_SOURCES hz/hz.h hz/hz.c hz/hz_defs.h)

if (HAMZA_BUILD_SHARED)
    add_compile_definitions("HZ_BUILD_SHARED")
    add_library(hamza SHARED ${HAMZA_SOURCES})
else ()
    add_library(hamza STATIC ${HAMZA_SOURCES})
endif ()
target_include_directories(hamza PUBLIC ./)

set_target_properties(hamza PROPERTIES VERSION ${HAMZA_VERSION_STRING} SOVERSION ${HAMZA_VERSION_MAJOR})


find_package(Freetype 2.6 REQUIRED)

target_link_libraries(hamza PUBLIC ${FREETYPE_LIBRARIES} m)
target_include_directories(hamza PUBLIC ${FREETYPE_INCLUDE_DIRS})